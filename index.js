const express = require("express")
const app = express()
const print = require("./print")

console.log("print:", print)

app.get('/haha', function (req, res) {
  print("hahahaha hihihihii")
  res.send('Hello World!!!!?!?!?!')
})

app.listen(3000, () => { console.log("server is running at port: 3000") })