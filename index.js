const express = require('express');
const path    = require('path');
const port    = 4000;

var app = new express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/pages/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('public/pages/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve('public/pages/contact.html'));
});

app.get('/post', (req, res) => {
    res.sendFile(path.resolve('public/pages/post.html'));
});

app.get('/getpdf', (req, res) => {
    res.sendFile(path.resolve('public/pdf/JSAV.pdf'));
});

app.listen(port, () => console.log(`App listening on port ${port}`));
