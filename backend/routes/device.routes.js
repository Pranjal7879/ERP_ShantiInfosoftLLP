import express from "express";
import Device from "../models/user.device.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newDevice = new Device(req.body);
        await newDevice.save();
        res.status(201).json(newDevice);
    } catch (error) {
        console.error("Error adding device:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(200).json(devices);
    } catch (error) {
        console.error("Error fetching devices:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedDevice = await Device.findByIdAndDelete(req.params.id);
        if (!deletedDevice) {
            return res.status(404).json({ message: "Device not found" });
        }
        res.json(deletedDevice);
    } catch (error) {
        console.error("Error deleting device:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { receiver, status } = req.body;
    console.log(id)
    try {
      const device = await Device.findByIdAndUpdate(
        id,
        { receiver, status },
        { new: true }
      );
      res.json(device);
    } catch (error) {
      console.error('Error updating device:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

export default router;