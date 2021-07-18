// Dependencies
const path = require('path');

// Module exports
module.exports = (app)=> {

//HTML GET Requests
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

//last one star file 
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
};