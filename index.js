const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: ".env.local" });
const app = express();
const { PORT = 4007 } = process.env;

app.use(express.json());

app.use("/api", require("./routes"));

app.listen(PORT, console.log(`server is running on port: ${PORT}`));
