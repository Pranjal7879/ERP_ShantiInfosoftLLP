import mongoose from "mongoose";

const superadminSchema = new mongoose.Schema({

    emailId: {
        type: String,
        required: true,
        unique: true,  
      },

      password:{
        type: String,
        required: true,
        minlength:6
      }
});

// const Superadmin = mongoose.model("Superadmin", userSchema)

// export default `Superadmin`;

const Superadmin = mongoose.model("Superadmin2", superadminSchema)

export default Superadmin 