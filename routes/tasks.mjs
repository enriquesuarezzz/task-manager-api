import express from "express";
import Task from "../models/task.mjs";

const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Create a new task
router.post("/", async (req, res) => {
  const newTask = new Task(req.body);
  const saved = await newTask.save();
  res.status(201).json(saved);
});

// Update a task
router.put("/:id", async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;
