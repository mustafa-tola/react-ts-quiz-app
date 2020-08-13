importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js")


firebase.initializeApp({
    apiKey: "AIzaSyDE7UGlTJ3knX3Ox2PAR-HAyuiayMiUVro",
    authDomain: "quiz-app-mustafa.firebaseapp.com",
    databaseURL: "https://quiz-app-mustafa.firebaseio.com",
    projectId: "quiz-app-mustafa",
    storageBucket: "quiz-app-mustafa.appspot.com",
    messagingSenderId: "185708338826",
    appId: "1:185708338826:web:4a10cf02b89239120d5773"
})


firebase.messaging();