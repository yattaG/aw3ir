function validation(){
    let l = document.getElementById("lname").value;
    let f = document.getElementById("fname").value;
    let b = document.getElementById("birth").value;
    let a = document.getElementById("address").value;
    let e = document.getElementById("email").value;

    var x = document.getElementById("error");
    var y = document.getElementById("resultat");
    

    if (l == "" && "lname".length < 5) {
        x.setAttribute("style", "display:block");
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    }

    else if(f == "" ) {
        x.setAttribute("style", "display:block");
        document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";
    }
    else if(b == "" ) {
        x.setAttribute("style", "display:block");
        document.getElementById("error").innerHTML = "La saisie de la date de naissance est obligatoire";
    }
    else if(a == "" ) {
        x.setAttribute("style", "display:block");
        document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
    }
    else if(e == "" ) {
        x.setAttribute("style", "display:block");
        document.getElementById("error").innerHTML = "La saisie de l'email est obligatoire";
    }
    else {
        y.setAttribute("style", "display:block");
        x.setAttribute("style", "display:none");
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#fname").value;
    }
}