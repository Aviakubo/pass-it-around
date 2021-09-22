const express = require('express');
console.log(express);

const app = express();

app.get('/', (req, res) => {
    res.send('99 bottles of beer on the wall');
});

app.listen(3000);