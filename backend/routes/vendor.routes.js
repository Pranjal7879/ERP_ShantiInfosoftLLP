import express from "express";
import Vendor from "../models/user.vendor.js";  
import auth from "../middleware/auth.js";
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const newVendor = new Vendor(req.body);
        await newVendor.save();
        res.status(201).json(newVendor);
    } catch (error) {
        console.error("Error adding vendor:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.get("/", auth, async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json(vendors);
    } catch (error) {
        console.error("Error fetching vendors:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const deletedVendor = await Vendor.findByIdAndDelete(req.params.id);
        if (!deletedVendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        res.json(deletedVendor);
    } catch (error) {
        console.error("Error deleting vendor:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { vendorName, contact, emailId, address, GST } = req.body;
    try {
      const updatedVendor = await Vendor.findByIdAndUpdate(
        id,
        { vendorName, contact, emailId, address, GST },
        { new: true }
      );
      res.json(updatedVendor);
    } catch (error) {
      console.error('Error updating vendor:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
