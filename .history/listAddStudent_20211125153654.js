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
let totalObtenus = document.getElementById('totalObtenus');
let totalRequis = document.getElementById('totalRequis');


photoEtudiant.addEventListener("change",function(){
    const reader = new FileReader();

    reader.addEventListener('load',()=>{
        console.log(reader.result);
    });

    reader.readAsDataURL(this.files[0]);
})

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    ajouterEtudiant();
    myForm.reset();
})


//Sauvegarder les données de l'étudiant
function ajouterEtudiant() {
    let etudiant = JSON.parse(localStorage.getItem('Etudiants')) || [];
    etudiant.push({
        nom:nomEtudiant.value.toUpperCase(),
        prenom:prenomEtudiant.value.toUpperCase(),
        date:dateEtudiant.value,
        email:emailEtudiant.value.toLowerCase(),
        contact:contactsEtudiant.value,
        contactParent:contactsParentEtudiant.value,
        specialite:specialiteEtudiant.value.toUpperCase(),
        scolarite:scolariteEtudiant.value,
        pointObtenu:
        // photo:photoEtudiant.value,
        // pointObtenu : totalObtenus.value,
        // pointRequi : totalRequis.value,
    });

    localStorage.setItem('Etudiants',JSON.stringify(etudiant));
}


if (localStorage.getItem('Etudiants')) {

    var jsonString = localStorage.getItem('Etudiants');
    var retO = JSON.parse(jsonString);
    retO.forEach((el) => {
        console.log(el.specialite);
    })
    
}


