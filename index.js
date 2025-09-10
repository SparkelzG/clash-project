const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/proxy", (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("No URL provided.");
  request(url).pipe(res);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
