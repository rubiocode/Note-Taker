// Dependencies
const path = require('path');

// Module exports
module.exports = (app)=> {

//HTML GET Requests (must have * listed last)
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
};