import mongoose from "mongoose";
import { MONGODB_URI } from "../util/secrets";

const mongoUrl = MONGODB_URI;

mongoose.connect(mongoUrl);

mongoose.connection.on("open", () => {
  console.info("MongoDB connection successful");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection failed", err);
});
