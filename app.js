const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

const otherRouter = require ("./routes/other.routes")
/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

/* MIDDLEWARE */
app.use(express.static("public"));

app.use ("/" , otherRouter) 
/* SERVER */
app.listen(port, () => console.log('http://localhost:3030'));