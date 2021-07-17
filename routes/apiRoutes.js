// Dependencies
let db = require ('../db/db.json');
let fs = require ('fs');


// Module exports and API apiRoutes
module.exports = function (app) {

    // Setting up GET /api/notes that reads db file and returns parsed JSON notes
    app.get('/api/notes', (req, res) => {
        res.send(JSON.parse(fs.readFile(db)));
        }
    );
    

    //Setting up POST route request
    app.post('/api/notes', (req, res) => {

        //creating variables that would be put in an array
        let notesData= JSON.parse(fs.readFileSync(db));

        //Creating new notes
        let newNote = req.body;
        console.log(newNote);

        newNote.id=notesData.length;

        //Pushing new notes into the notes object
        notesData.push(newNote);

        //converting data back into a string
        fs.writeFileSync(db, JSON.stringify(notesData));

        // Respond with the notes parsed as a string
        res.json(notesData);
    })


    //Setting up DELETE route requests
    app.delete('/api/notes/:id', (req, res)=>{
        
        const {id}= req.params;
        let indexToDelete= data.filter((each) => each.id != id);

        if(!indexToDelete){
            return res.status(404).json({error: 'No note with that id'});
        }
        
        let data = indexToDelete;

        fs.writeFile(db, JSON.stringify(data));
    });


};