import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDP4V9aMPpfz6UTd8DxtMhadolJgn2THZY", 
  databaseURL:"https://meetfinal-f3685-default-rtdb.firebaseio.com/"  
};
 
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName =  prompt("Your name?") ;
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
