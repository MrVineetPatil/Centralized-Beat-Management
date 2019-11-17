import firebase from 'firebase'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCI7IpbggssCktA2bT3Mw04ixsL3Z5F8n8",
	authDomain: "kspfirebaseproject.firebaseapp.com",
    databaseURL: "https://kspfirebaseproject.firebaseio.com",
    projectId: "kspfirebaseproject",
    storageBucket: "kspfirebaseproject.appspot.com",
    messagingSenderId: "680397388271",
    appId: "1:680397388271:web:44123be008dec1aba05e1a"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref();
export const auth = firebase.auth();
export const storage = firebase.storage().ref();


