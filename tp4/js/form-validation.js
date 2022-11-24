window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code Javascript pour valider tous les champs du formulaire
    document.querySelector("form").addEventListener("submit", function(event){
      event.preventDefault();
      console.log("form submitted !");


      validation()
    });


};
var myModal = new bootstrap.Modal(document.getElementById('myModal'));


   function validation(){
    var l = document.getElementById("lname").value;
    var f = document.getElementById("fname").value;
    var d = document.getElementById("birth").value;
    var a = document.getElementById("address").value;
    var e = document.getElementById("email").value;

    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    document.querySelector(".modal-body").innerHTML = "";
    document.querySelector(".modal-title").innerHTML = "Erreur de saisie";


    if (l == ""){
      document.querySelector(".modal-body").innerHTML = "Tous les champs du formulaire sont obligatoires";
      myModal.show();
      return false;
    }

     if (l.length < 5) {
      document.querySelector(".modal-body").innerHTML = "Le nom doit contenir au moins 5 caractères";
      myModal.show();
      return false;
     }

     if (f == ""){
      document.querySelector(".modal-body").innerHTML = "Tous les champs du formulaire sont obligatoires";
      myModal.show();
      return false;
    }

     if (f.length < 5) {
        document.querySelector(".modal-body").innerHTML = "Le prenom doit contenir au moins 5 caractères";
        myModal.show();
        return false;
      }

      if (d == ""){
        document.querySelector(".modal-body").innerHTML = "Tous les champs du formulaire sont obligatoires";
        myModal.show();
        return false;
      }


      if (e == ""){
        document.querySelector(".modal-body").innerHTML = "Tous les champs du formulaire sont obligatoires";
        myModal.show();
        return false;
      }

      if (a == ""){
        document.querySelector(".modal-body").innerHTML = "Tous les champs du formulaire sont obligatoires";
        myModal.show();
        return false;
      }

      if (a.length < 5) {
        document.querySelector(".modal-body").innerHTML = "L'adresse doit contenir au moins 5 caractères";
        myModal.show();
        return false;
      }

      contactStore.add(l, f, d, a, e);
      contactList=contactStore.getList();
      document.querySelector("table tbody").innerHTML = ""

      for (var index in contactList) {
          document.querySelector("table tbody").innerHTML =
          document.querySelector("table tbody").innerHTML +
          "<tr><td>" +
          contactList[index].name +
          "</td><td>" +
          contactList[index].firstname +
          "</td><td>" +
          contactList[index].date +
          "</td><td>"+
          contactList[index].adress +
          "</td><td>"+
          contactList[index].mail +
          "</td><td>"
        }
        document.querySelector("form").reset();
      }
      

     function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      function validateDate (date){
        let nowTimestamp = Date.now()
        let dateNaissance = new Date(date);
        let dateNaissanceTimestamp = dateNaissance.getTime();

        return dateNaissanceTimestamp < nowTimestamp;
      }

  

