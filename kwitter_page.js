//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
    {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
        });
        
        document.getElementById("msg").value = "";
        document.getElementById("output").innerHTML="<h1><b>Congratulations</b></h1><p> You have received a message from Sender <b>"+user_name+"</b></p> <p> Want to say </p> <div style='padding:25px; background-color:#d52027; color:#fff; font-size:22px; font-style:italic; line-height:26px; border-radius:15px; margin:20px auto; font-style: comics-san;'>"+msg + "</div>";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

