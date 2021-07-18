// Dependencies
const express = require('express');

// Setting up express app
const app = express();
const PORT = process.env.PORT || 3001;

//Create empty array 

//const notes= [];

// Making sure all routes go to correct folder (middleware).
app.use(express.static('public'));

//Setting up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Getting express app routes (api routes need to go first)
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Starts the server to begin listening
app.listen(PORT, ()=> console.log(`Server listening on http://localhost:${PORT}`));
