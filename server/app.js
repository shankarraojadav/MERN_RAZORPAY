import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Razorpay from "razorpay";
import paymentRouter from "./routes/paymentRoutes.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 4000

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/payment", paymentRouter);

app.get("/payment/getkey", (req, res) => {
  try {
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
  } catch (error) {
    res.status(500).json(error)
  }
}
);

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});


app.listen(port, () => {
    console.log("server started")
})


connectDB();