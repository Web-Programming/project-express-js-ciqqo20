const express = require("express");
const app = express();
const port = 3000;

//Membuat Route ke halaman home dengan method GET
app.get("/", (req, res) => {
    res.send("Hallo, ini halaman HOME dengan method GET");
});

//Membuat middleware untuk menerima request body dari json
app.use(express.json());
//Membuat Route ke halaman submit dengan method POST
app.post("/submit", (req, res) => {
    const {name, npm, jeniskelamin} = req.body;
    res.send(`Hallo, ${name} dengan NPM ${npm}. Apakah kamu ${jeniskelamin}?`);
});

//Serving Static File
app.use(express.static('public'));

app.listen(port, (req, res) => {
    console.log(`Server Running at http://localhost:${port}`);
});