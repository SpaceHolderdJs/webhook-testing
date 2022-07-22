import express from "express";

const app = express();

const defaultPort = 7777;

app.post("/webhook", (req, res) => {
  console.log("RESPONSE", res);
});

app.listen(defaultPort, () => console.log("Server is running on port"));
