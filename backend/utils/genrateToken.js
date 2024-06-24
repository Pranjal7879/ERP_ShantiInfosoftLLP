import jwt from "jsonwebtoken";

const genrateTokenAndSetCookie = (emailId, res) => {

    const token = jwt.sign({emailId}, process.env.JWT_SECRET,{
        expiresIn : "1h"
    })
    

    res.cookie("jwt", token, {
        maxAge: 1*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict"
    });
}

export default genrateTokenAndSetCookie;
