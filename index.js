import express from "express";
const app = express();
// DB
import mongoose from "mongoose";
// DotENV
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import cors from "cors";
// Connection to DB
mongoose.set("strictQuery", true);
// When using strictQuery: true, Mongoose will only save fields that are specified in your schema
const db = process.env.DB_CONNECT;

mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    // () => console.log("Connected to DB")
  )
  .then(() => {
    const port = process.env.PORT || 88001;
    app.listen(port, () => {
      console.log("Server is up and running");
    });
    console.log("connected to db!")
  })
  .catch((e) => console.log(e));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
import authRoute from "./routes/auth.js";
import messageRoute from "./routes/messages.js";

// Routes Middleware
app.get("/health", (req, res) => {
  res.send("server is healthy");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/message", messageRoute);
