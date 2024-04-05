// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW7tayOKqL7g-fHLeQ9he_SMLLrFtzQB0",
    authDomain: "divine-steps-chatroom.firebaseapp.com",
    projectId: "divine-steps-chatroom",
    storageBucket: "divine-steps-chatroom.appspot.com",
    messagingSenderId: "542426854016",
    appId: "1:542426854016:web:9ec3777db3fd2343266c65"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

new Vue({
    el: '#app',
    data: {
        messages: [],
        messageInput: ''
    },
    methods: {
        sendMessage() {
            const message = this.messageInput.trim();
            if (message) {
                messagesRef.push({
                    username: "Anonymous",
                    text: message
                });
                this.messageInput = '';
            }
        }
    },
    mounted() {
        messagesRef.on("child_added", (snapshot) => {
            const message = snapshot.val();
            this.messages.push(message);
        });
    }
});
