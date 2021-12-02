const myForm = document.getElementById('myForm');
const nomEtudiant = document.getElementById('nom');
const prenomEtudiant = document.getElementById('prenom');
const dateEtudiant = document.getElementById('date');
const emailEtudiant = document.getElementById('email');
const contactsEtudiant = document.getElementById('contacts');
const contactsParentEtudiant = document.getElementById('contactsParent');
const specialiteEtudiant = document.getElementById('specialite');
const scolariteEtudiant = document.getElementById('scolarite');
const photoEtudiant = document.getElementById('addPhoto');


/*Obtenir l'URL de l'image*/
photoEtudiant.addEventListener("change",function(){
    if(this.files[0].size > 524288){
        alert("Ooops ! La taille de l'image ne doit pas dépasser 500 Ko");
        this.value = "";
     }
   else{ const reader = new FileReader();

    reader.addEventListener('load',(e)=>{
        photoEtudiant.src = reader.result;
    });

    reader.readAsDataURL(this.files[0]);}
})
/*Fin*/

/*Valider le formulaire*/
myForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(nomEtudiant.value.trim()!=="" && prenomEtudiant.value.trim()!=="" && contactsParentEtudiant.value.trim()!=="" && scolariteEtudiant.value.trim()!==""){
        ajouterEtudiant();
        myForm.reset(); 
    }
    else{
        const error = document.getElementById('error');
        error.innerHTML ="Veuillez remplir tous les champs"
        error.style.color ="red";
        setTimeout(function(){
            error.innerHTML =""
        },1000)
    }

})
/*Fin*/

/*Changer photo de l'Admin sur le dashboard*/
let arr = JSON.parse(localStorage.getItem('Admin'));
    for (admin in arr) {
        const adminPic = document.querySelector('.photoAdmin')
        adminPic.style.background=`url(${arr[admin].photo}) no-repeat center/cover`

    }
/*Fin*/

/*Créer un matricule pour l'étudiant:la date + le mois + heure + les secondes + année*/
var date = new Date();
let id =date.getDate() + "" + date.getMonth() + "" + date.getHours() + "" + date.getSeconds() + "" + date.getFullYear();
//Sauvegarder les données de l'étudiant
function ajouterEtudiant() {
    let etudiant = JSON.parse(localStorage.getItem('Etudiants')) || [];
    let exist = etudiant.length && JSON.parse(localStorage.getItem('Etudiants')).some(data => data.nom.toUpperCase() == nomEtudiant.value.toUpperCase() && data.prenom.toUpperCase() == prenomEtudiant.value.toUpperCase());
    
    if (!exist) {
        etudiant.push({
        nom:nomEtudiant.value.toUpperCase(),
        prenom:prenomEtudiant.value.toUpperCase(),
        date:dateEtudiant.value,
        email:emailEtudiant.value.toLowerCase(),
        contact:contactsEtudiant.value,
        contactParent:contactsParentEtudiant.value,
        specialite:specialiteEtudiant.value.toUpperCase(),
        scolarite:scolariteEtudiant.value,
        photo:photoEtudiant.src,
        matricule:id,
        pointObtenu: 0,
        pointRequi: 0,
        appreciation:0
    });

    localStorage.setItem('Etudiants',JSON.stringify(etudiant));
    location.href="liste.html";
    }

    else{
        alert("Desole, l'étudiant existe déja!")
    }

}



