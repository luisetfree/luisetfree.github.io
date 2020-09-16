 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAWdCHPy6jpz0CGcR8wiIn4hdlA0Wp1BY0",
  authDomain: "portfolio-5d842.firebaseapp.com",
  databaseURL: "https://portfolio-5d842.firebaseio.com",
  projectId: "portfolio-5d842",
  storageBucket: "portfolio-5d842.appspot.com",
  messagingSenderId: "754957876751",
  appId: "1:754957876751:web:6d67bac79d4efa5527ed7a",
  measurementId: "G-XLB8Q0C977"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  


  var db=firebase.firestore();


function guardar(){

  var nombre = document.getElementById('name').value;
  
  var asunto = document.getElementById('subject').value;
  var correo = document.getElementById('email').value;
  var mensaje = document.getElementById('message').value;

  db.collection("mensajes").add({
    nombre: nombre,
    asunto: asunto,
    comentario: mensaje,
    correo:correo,
    

    
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById('name').value='';
  document.getElementById('subject').value='';
  document.getElementById('email').value='';
  
  document.getElementById('message').value='';
  
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


}

