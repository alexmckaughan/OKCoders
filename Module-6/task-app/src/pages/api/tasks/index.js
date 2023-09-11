// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../server/db";
import Task from "../../../server/models/Task";

export default async function handler(req, res) {
  try {
    await dbConnect();

    if (req.method === "POST") {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    } else if (req.method === "GET") {
      const tasks = await Task.find({});
      res.status(200).json(tasks);
    }
  } catch (error) {
    console.error("Error:", error.message); // Log the error for debugging
    res.status(500).json({ error: error.message });
  }
}
