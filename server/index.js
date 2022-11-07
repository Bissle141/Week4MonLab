//import express and cors packages inside of my server

const express = require('express');
const cors = require('cors'); //cors = "cross origin resource sharing"

//invoke express and save to a new var called app

const app = express()

//set up middleware - external code you want to run whenever your code starts
app.use(express.json())
app.use(cors())


app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

  
//open door to server
app.listen(4000, () => console.log('Server is running on port 4000'))