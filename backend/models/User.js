const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: { type: String, required: true },
})

// static method: register
userSchema.statics.register = async function (email, password) {
	const exists = await this.findOne({ email })
	if (exists) {
		throw Error("Email already exists in the database.")
	}

	const salt = await bcrypt.genSalt(5)
	const hash = await bcrypt.hash(password, salt)

	const user = await this.create({ email, password: hash })

	return user
}

module.exports = mongoose.model("User", userSchema)
