const express = require('express');
console.log(express);
const port = 3000;

const app = express();

var bottlesNum = 99;

app.get('/', (req, res) => {
    res.send(`${bottlesNum} bottles of beer on the wall
    <a href="${bottlesNum-1}">Take one down, pass it around</a>`);
});

app.get('/:numberOfBottles', (req, res) => {
    var remain = parseInt(bottlesNum - req.params.numberOfBottles);
    res.send(`${bottlesNum} bottles of beer on the wall <a href="${remain-1}">Take one down, pass it around</a>`)
})

app.listen(port, () => {
    console.log(`listening on port`, port)
});