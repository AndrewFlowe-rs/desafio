const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

/* MIDDLEWARE */
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get("/detalle", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/detalleMenu.html'))
})

/* SERVER */
app.listen(port, () => console.log('http://localhost:3030'));