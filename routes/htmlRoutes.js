// Dependencies
const express = require('express');
const path = require('path');

// Module exports
module.exports = function (app) {
    app.use(express.static(path.join(__dirname, "../public")));

//HTML GET Requests
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

console.log(__dirname)

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

};