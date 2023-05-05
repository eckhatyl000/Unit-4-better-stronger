module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
    

}

module.exports = {

    getRandomFortune: (req, res) => {
        const fortune = ["You will be very lucky today.","Your kindness will lead you to great success.","A great opportunity will come your way soon.","Your hard work will pay off in the end.","Good things come to those who wait."];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);



}

 




}

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());