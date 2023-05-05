const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getRandomFortune } = require('./controller.js');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getRandomFortune);
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;

    db.updateUser(userId, name, email)
        .then(() => {
            res.status(200).send('User updated successfully');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error updating user');
        });
});



const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;

app.use(bodyParser.json());

// Array to store resources
let resources = [];

// POST method to create a new resource with a random ID
app.post('/resources', (req, res) => {
    const newResource = req.body;

    // Generate a random ID for the new resource
    const newId = Math.floor(Math.random() * 100000);

    // Add the new resource to the array
    resources.push({ ...newResource, id: newId });

    // Return the new resource with the random ID
    res.status(201).json({ ...newResource, id: newId });
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));


app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    // remove user data with matching ID from data store
    res.status(204).end();
});



app.listen(4000, () => console.log("Server running on 4000"));

