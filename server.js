import express from "express";

const app = express();

const defaultPort = 7777;

app.get("/", (req, res) => {
  console.log("DEFAULT GET RESPONSE");
  res.status(200);
});

app.post("/", (req, res) => {
  console.log("DEFAULT POST RESPONSE");
  res.status(200);
});

app.post("/webhook", (req, res) => {
  console.log("RESPONSE", res);
  res.status(200);
});

app.listen(defaultPort, () => console.log("Server is running on port"));
