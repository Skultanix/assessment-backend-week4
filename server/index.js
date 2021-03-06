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

const messages = []

app.post(`/api/addMessage`, (req, res) => {
  console.log(req.body)
  const {newMessage} = req.body

  messages.push(newMessage)
  res.status(200).send(newMessage)
})

app.delete(`/api/delete/:num`, (req, res) => {
  console.log(req.params)

  if(+req.params.num) {
    messages.splice(req.params.num - 1, 1)
    res.status(200).send(messages)
  } else {
    res.status(400).send("A number was not inputed.")
}
console.log(messages)
})

app.put(`/api/update/:num`, (req, res) => {
  const {updatePost} = req.body
  const updateNum = req.params.num - 1

  messages[updateNum] = updatePost

  res.status(200).send(updatePost)
  console.log(messages)
})

app.listen(4000, () => console.log("Server running on 4000"));
