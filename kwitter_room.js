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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name;

function addRoom() {
	room_name = document.getElementById("room_name").value;






	firebase.database().ref("/").child(room_name).update({
		purpose: "adding_room_name"
	});
	localStorage.setItem("room_name", room_name);
	window.location = "kwitter_page.html";
}













function getData() {
	firebase.database().ref("/").on('value', function (snapshot) {
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function (childSnapshot) {
			childKey = childSnapshot.key;
			Room_names = childKey;

			row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

			//Start code
			
			document.getElementById("output").innerHTML += row;


			//End code
		});
	});
}
getData();
function redirectToRoomName(name)  {
	localStorage.setItem("room_name", name);
	window.location = "kwitter_page.html";
}

function logout(){
 localStorage.removeItem("user_name");                                    localStorage.removeItem("room_name");
window.location = "index.html";                                                             


}





