import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: String,
  priority: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  status: {
    type: String,
    enum: ["pending", "ongoing", "done"],
    default: "pending",
  },
});

export default mongoose.model("Task", taskSchema);
