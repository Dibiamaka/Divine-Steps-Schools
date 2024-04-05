// Get elements
const messageField = document.getElementById("messageInput");
const messageList = document.getElementById("messages");
const sendButton = document.getElementById("sendButton");

// Get a reference to the Firebase database
const database = firebase.database();
const messagesRef = database.ref("messages");

// Listen for changes in the database and display messages
messagesRef.on("child_added", (snapshot) => {
    const message = snapshot.val();
    const listItem = document.createElement("div");
    listItem.textContent = message.text;
    messageList.appendChild(listItem);
});

// Send message to the database
sendButton.addEventListener("click", () => {
    const message = messageField.value;
    if (message.trim() !== "") {
        messagesRef.push({
            text: message
        });
        messageField.value = "";
    }
});
