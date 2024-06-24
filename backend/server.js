
import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from 'cors';
import employeeRoutes from "./routes/employee.routes.js";
import deviceRoutes from "./routes/device.routes.js";
import vendorRoutes from "./routes/vendor.routes.js";

const app = express();
const PORT = process.env.PORT || 5000; 

dotenv.config()
app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRoutes);

app.use("/api/devices", deviceRoutes);

app.use("/api/vendors", vendorRoutes);


// app.get("/", (req, res) => {
//     res.send("Hello World!! this is the backend ")
// });


app.listen(PORT, () => {
    connectToMongoDB()
    console.log (`Server Running on  PORT http://localhost:/${PORT}`)
})