import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModels.js"

const protect = asyncHandler( async (req, res, next) => {
    let token


    if(req.headers.authorization  && 
        req.headers.authorization.startsWith("Bearer"))
        {
            try {

                token = req.headers.authorization.split(" ")[1]

                const decoded = jwt.verify(token, "abc123")
                
                req.user = await User.findById(decoded.id).select("-password")

                next()
            } catch (error) {
                console.error(error)
                res.status(401)
                throw new Error("Not Authorized, Token Failed")
            }
    } if (!token) {
        res.status(401)
        throw new Error("Note Authorized, no Token")
    }})


const admin = (req, res, next) => {
        if (req.user && req.user.isAdmin) {
            next()
        } else {
            res.status(401)
            throw new Error("Not Authourized as an  Admin")
        }
    }
      



export { protect, admin }
