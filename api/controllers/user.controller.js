import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async(req,res)=>{

        const token =req.cookies.access_token;
        if(!token) return res.status(401).send("You are not authenticated");
        jwt.verify(token,process.env.JWT_key,(err,payload)=>{
            res.send(payload)
        });
        // await User.findByIdAndDelete(req.params.id);
    
}
