const express = require("express");
const mongoose = require("mongoose");
const Job = require("./models/Job");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/upgradesalary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/save", async (req, res) => {
  const { title, link, userId } = req.body;
  const job = new Job({ title, link, userId });
  await job.save();
  res.send({ success: true });
});

app.get("/api/saved/:userId", async (req, res) => {
  const jobs = await Job.find({ userId: req.params.userId });
  res.json(jobs);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
print ( "hello World" )
