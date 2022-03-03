const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
   res.send('API is running...');
});

//api to fetch all notes
app.get('/api/notes', (req, res) => {
   res.send(notes);
});

//api to fetch only one note
app.get('/api/notes/:id', (req, res) => {
   const note = notes.find((n) => n._id === req.params.id);
   res.send(note);
});

//getting the value of the PORT variable in the .env file
const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`App is running on port ${PORT}....`));
