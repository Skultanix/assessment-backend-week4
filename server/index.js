const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
           "Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
           "If you can learn to love yourself, you will never be lonely.",
					 "If you wish to see the best in others, show the best of yourself.",
					 "It is better to deal with problems before they arise.",
           "If your desires are not extravagant, they will be granted."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.post(`/api/addTurtle`, (req,res)=> {
  //get text from the input box
  let turtle = "https://www.kindpng.com/picc/m/109-1097749_transparent-background-turtle-clipart-hd-png-download.png"
  
  res.status(200).send(turtle)
  
})

app.listen(4000, () => console.log("Server running on 4000"));
