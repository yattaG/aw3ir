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
      document.querySelector(".modal-title").innerHTML = "Bienvenue " + document.getElementById("fname").value;
      document.querySelector(".modal-body").innerHTML = "Vous etes né le " + document.getElementById("birth").value + " et vous habitez à";
      document.querySelector(".modal-map").innerHTML;
      document.querySelector(".modal-adresse").innerHTML = '<a href="https://maps.google.com/maps?q=' + a +'">Vous habitez à '+ a + ' </a>';
      myModal.show();
   }

     function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      function validateDate (){
        let nowTimestamp = Date.now()
        let dateNaissance = document.getElementById("birth").value;
        let dateNaissanceTimestamp = dateNaissance.getTime();

        //return dateNaissanceTimestamp < nowTimestamp;
        
        if(dateNaissanceTimestamp > nowTimestamp){
          document.querySelector(".modal-title").textContent = "La date de naissance ne peut pas etre dans le futur";
          myModal.show();
          return false;
        }
      }

      const openModel = function(e){
        e.preventDefault
        const target = document.querySelector(e.target.getAttribute(href))
        target.style.display = null;
        target.removeAttribute('aria-hidden')
      }
      document.querySelectorAll('js-modal').forEach(a => {
        a.addEventListener("click", openModel)
      })
  

