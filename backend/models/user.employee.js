import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    jobRole: {
        type: String,
        required: true,
    },
    
});

const Employee = mongoose.model("Employee1", employeeSchema);

export default Employee;
