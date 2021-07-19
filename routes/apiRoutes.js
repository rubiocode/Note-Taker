// Dependencies
const db ='db/db.json';
const fs = require ('fs');


// Module exports and API apiRoutes
module.exports =(app)=> {

    // Setting up GET /api/notes that reads db file and returns parsed JSON notes
    app.get('/api/notes', (req, res) => {
        let savedNotes=fs.readFileSync(db) 
        return res.json(JSON.parse(savedNotes));
        } 
    );
    

    //Setting up POST route request
    app.post('/api/notes', (req, res) => {
        let savedNotes=fs.readFileSync(db) 
        savedNotes=JSON.parse(savedNotes);
            savedNotes.push(req.body);
            
            for (let i = 0; i < savedNotes.length; i++) {
                savedNotes[i].id = i+1;
            }

            fs.writeFileSync(db, JSON.stringify(savedNotes));
                return res.send(db, savedNotes);

    });


    //Setting up DELETE route requests
    app.delete('/api/notes/:id', (req, res)=>{
        
        const {id}= req.params;
        let notes=fs.readFileSync(db) 
        notes=JSON.parse(notes);
        let indexToDelete= notes.filter((each) => each.id != id);

        if(!indexToDelete){
            return res.status(404).json({error: 'No note with that id'});
        }

        fs.writeFileSync(db, JSON.stringify(indexToDelete))
            res.send(db, indexToDelete);
        });
};