//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDsoABTeLpKiLGR8fH9UL_qMH-zDqh5tA8",
  authDomain: "protest-748dc.firebaseapp.com",
  databaseURL: "https://protest-748dc-default-rtdb.firebaseio.com",
  projectId: "protest-748dc",
  storageBucket: "protest-748dc.appspot.com",
  messagingSenderId: "30133169483",
  appId: "1:30133169483:web:9fc3ebe466664545b68cce",
  measurementId: "G-MY0YHQBNSH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name")
  window.location = "index.html";
}