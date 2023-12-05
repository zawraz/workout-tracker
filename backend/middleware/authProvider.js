const jwt = require("jsonwebtoken")
const User = require("../models/User")

const authProvider = async (req, res, next) => {
	// verify authorization
	const { authorization } = req.headers

	if (authorization === "Bearer") {
		return res.status(401).json({ error: "Authorization token required." })
	}

	const [_, token] = authorization.split(" ")

	try {
		const { id } = jwt.verify(token, process.env.SECRET)

		req.user = await User.findOne({ id }).select("_id")
		next()
	} catch (error) {
		console.error(error)
		res.status(401).json({ error: "Request is not authorized." })
	}
}

module.exports = authProvider
