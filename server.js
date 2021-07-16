// Dependencies
const express = require('express');
const path = require('path');

// Setting up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Making sure all routes go to correct folder.
app.use(express.static(path.join(_dirname, './public')));

//Setting up express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Getting express app routes 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Starts the server to begin listening
app.listen(PORT, ()=> console.log(`Server listening on http://localhost:${PORT}`));
