// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FIL

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
const players=['players1','players2','players3'];
const person={
  name:'john Doe',
  age: 30,
  gender:'male'
};
const team=players;
const team=[...players];
const team=[...players];
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;
