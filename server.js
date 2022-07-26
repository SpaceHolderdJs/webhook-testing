import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const defaultPort = process.env.PORT || 7777;

app.get("/", (req, res) => {
  console.log("req", req, res);
  console.log("DEFAULT GET RESPONSE");
  res.status(200);
});

app.post("/", (req, res) => {
  console.log("req", req, res);
  console.log("DEFAULT POST RESPONSE");
  res.status(200);
});

app.post("/webhook", (req, res) => {
  console.log("RESPONSE", res);
  console.log(`-------------------body----------------`);
  console.log(req.body);
  res.status(200);
});

app.listen(defaultPort, () =>
  console.log(`Server is running on port ${defaultPort}`)
);
