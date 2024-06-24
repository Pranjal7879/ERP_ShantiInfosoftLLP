import express from "express";
import Employee from "../models/user.employee.js";
import auth from "../middleware/auth.js";
const router = express.Router()

function handleErrors(err, req, res, next) {
    console.log(err.stack);
    res.status(500).json({ message: "something went wrong" });
    
}
//  creating employee 

router.post("/", async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        handleErrors(error, req, res);
    }
});

// getting employee

router.get("/", auth, async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);

    } catch (error) {
        handleErrors(error, req, res)
    }
})


// updating employee


router.put("/:id", async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }  // returns the updated document
        );
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.json(updatedEmployee);
    } catch (error) {
        handleErrors(error, req, res);
    }
});



//   deleting employee

router.delete("/:id", async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.json(deletedEmployee);

    } catch (error) {
        handleErrors(error, req, res);
    }
});

export default router;