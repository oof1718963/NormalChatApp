//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCAs6NQRDcqDmoNJuHQ7WMWeDbsgdrzUl0",
      authDomain: "i-like-u-cut-g.firebaseapp.com",
      databaseURL: "https://i-like-u-cut-g-default-rtdb.firebaseio.com",
      projectId: "i-like-u-cut-g",
      storageBucket: "i-like-u-cut-g.appspot.com",
      messagingSenderId: "53848556028",
      appId: "1:53848556028:web:03bc129ee26da809183279"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();

user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
 function send() {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
            name:user_name,

            message:msg,

            like:0
       });
 }
  
