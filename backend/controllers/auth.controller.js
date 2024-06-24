import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
// import genrateTokenAndSetCookie from "../utils/genrateToken.js";
import Superadmin from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    //  console.log(req.body)
    const user = await Superadmin.findOne({ emailId }).exec();;
    //  console.log(user)
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    //  console.log(isPasswordCorrect)
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid emailId or password" })
    }





    // // Generate JWT
    const token = jwt.sign(
      { _id: user._id },
      "abcd",
      { expiresIn: "1h" }
    );







    // const token = genrateTokenAndSetCookie(emailId, res);
    res.status(200).json({ message: "Login Successfully", token });
    // console.log(token)
  }
  catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" })
  }
}



export const logout = (req, res) => {
  try {
    //   res.cookie("jwt", "", {maxAge:0});
    // localStorage.removeItem()
    res.status(200).json({ message: "Logout successfuly" })
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal server error" })
  }
  console.log("logoutUser")
}


// Function to change admin password
export const changepassword = async (req, res) => {
  try {
    const { emailId, oldPassword, newPassword } = req.body;
    const admin = await Superadmin.findOne({ emailId });

    // If admin not found, return error
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    // Check if old password matches
    const isPasswordCorrect = await bcrypt.compare(oldPassword, admin.password);

    // If old password is incorrect, return error
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Incorrect old password" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update admin's password in database
    await Superadmin.updateOne({ emailId }, { password: hashedPassword });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error in change password controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
