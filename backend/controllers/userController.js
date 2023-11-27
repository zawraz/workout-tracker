const User = require("../models/User")

// login

const loginUser = async (req, res) => {
	res.json({ msg: "login user" })
}

// register

const registerUser = async (req, res) => {
	res.json({ msg: "register user" })
}

module.exports = { loginUser, registerUser }
