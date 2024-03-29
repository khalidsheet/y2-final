const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3000; // Set the port

const staticDir = path.join(__dirname, "dist");

app.use(compression());

app.use(
  express.static(staticDir, {
    maxAge: "1d",
    etag: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
