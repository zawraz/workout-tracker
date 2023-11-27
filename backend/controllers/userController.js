const User = require("../models/User")

const loginUser = async (req, res) => {
	res.json({ msg: "login user" })
}

const registerUser = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.register(email, password)

		res.status(200).json({ email, user })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = { loginUser, registerUser }
