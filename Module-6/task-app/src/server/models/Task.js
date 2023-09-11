import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  due: { type: String, required: true },
  created: { type: String, required: true },
  modified: { type: String, required: true },
  //   priority: { type: String, required: true },
  //   tags: { type: Array, required: true },
  //   subtasks: { type: Array, required: true },
  //   comments: { type: Array, required: true },
  //   attachments: { type: Array, required: true },
  //   assignee: { type: String, required: true },
  //   creator: { type: String, required: true },
  //   project: { type: String, required: true },
  //   workspace: { type: String, required: true },
});

// "tasks" below is the name of collection in MongoDB cluster

export default mongoose.models.Task ||
  mongoose.model("Task", TaskSchema, "tasks");
