const http = require("http");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3000;

const resJson = JSON.parse(fs.readFileSync("./devices.json").toString());

app.use(
  cors({
    origin: "http://localhost:3001",
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req, res) => res.json(resJson));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
