import express from "express";

const app = express();

const hostname = "localhost";
const port = 8077;

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, hostname, () => {
  console.log(`hello first app, running on http://${hostname}:${port}`);
});
