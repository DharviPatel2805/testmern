const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ users: ["one", "two", "three"] });
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
