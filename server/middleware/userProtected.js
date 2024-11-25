const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const Auth = require("../model/Auth")

exports.userProtected = asyncHandler(async (req, res, next) => {

    const { user } = req.cookies
    console.log(user);
    if (!user) {
        return res.status(401).json({ message: "cookie not found" })
    }

    jwt.verify(user, process.env.JWT_KEY, async (err, decode) => {
        if (err) {
            return res.status(401).json({ message: "Cookie expire" })
        }
        const result = await Auth.findById(decode.id)
        if (result.active) {
            req.body.userId = decode.id
            next()
        } else {
            return res.status(401).json({ message: "Your account blocked by admin plz contact admin" })
        }
    })

})

