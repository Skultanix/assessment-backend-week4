document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
    };

const fortuneBtn = document.getElementById("fortuneButton")

const messageInput = document.getElementById(`messageBox`)
const addMessageButton = document.getElementById(`postMessage`)
const postArea = document.getElementById("messageArea")

function createMessage() {
    let newMessage = messageInput.value

    let messageBody = {
        newMessage
    }

    axios.post("http://localhost:4000/api/addMessage/", messageBody)
    .then((res) => {
        let messageText = res.data
        let newPost = document.createElement(`h5`)
        newPost.innerText = messageText

        document.body.insertBefore(newPost, postArea)
        console.log(messageText)

        messageInput.value = ''
    })
}
addMessageButton.addEventListener(`click`,createMessage)

/*function deleteMessage() {
    const newIndex = indexInput.value

    axios.delete(`http://localhost:4000/api/delete/${newIndex}`)
      .then((res) =>{

      })
      .catch((err) => {
          console.log(err.response.data)
      })
}*/