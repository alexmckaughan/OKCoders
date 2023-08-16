export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ name: "Mocha Latte" });
  } else {
    res.status(404).json({ error: "not found" });
  }
}
