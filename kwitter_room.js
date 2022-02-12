var firebaseConfig = {
  apiKey: "AIzaSyDZGGiLuUF6H_Vb6Kq9zEXFnkQ7P8kbHCY",
  authDomain: "kwitter-app-6fd14.firebaseapp.com",
  databaseURL: "https://kwitter-app-6fd14-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-6fd14",
  storageBucket: "kwitter-app-6fd14.appspot.com",
  messagingSenderId: "457930501354",
  appId: "1:457930501354:web:80d52f2fdb83cbd3f8fb93",
  measurementId: "G-3ND8FE1F5L"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"; 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    
}

function lpgout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";   
}