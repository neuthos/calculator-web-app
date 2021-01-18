const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true })); //ngeparse semua http request yg didapatkan supaya menjadi object dan datanya bisa di manipulasi

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1); //nama keynya tergantung dari name di htmlnya
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send("The result is: " + result);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  let weight = +req.body.weight;
  let height = +req.body.height / 100;
  let result = weight / (height * height);
  let a = result.toFixed(2);

  res.send("Result is " + a);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
