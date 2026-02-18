import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test API
app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, title: "Post 1", body: "Hello from backend" },
    { id: 2, title: "Post 2", body: "Basic fullstack fetch app" },
    { id: 3, title: "Post 3", body: "Frontend fetches this" },
  ]);
});

app.listen(5000, () => {
  console.log("✅ Backend running: http://localhost:5000");
});
