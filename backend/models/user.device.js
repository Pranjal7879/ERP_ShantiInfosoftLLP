import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    Devicename: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Available"
    },
    Purchaseddate: {
        type: String,
        required: true
    },
    Warranty: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        // required: true,
    }, 
   receiver : {
        type: String
    }
    
});

const Device = mongoose.model("Device", deviceSchema);

export default Device;
