const myForm = document.getElementById('myForm');
const totalObtenus = document.getElementById('totalObtenus');
const totalRequis = document.getElementById('totalRequis');

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(totalObtenus.value);
    myForm.reset();
})

function ajouterNoteEtudiant() {
    let etudiant = JSON.parse(localStorage.getItem('Etudiants')) || [];
    etudiant.push({
        total:nomEtudiant.value.toUpperCase(),
        prenom:prenomEtudiant.value.toUpperCase(),
        date:dateEtudiant.value,
        email:emailEtudiant.value.toLowerCase(),
        contact:contactsEtudiant.value,
        contactParent:contactsParentEtudiant.value,
        specialite:specialiteEtudiant.value.toUpperCase(),
        scolarite:scolariteEtudiant.value,
        photo:photoEtudiant.src,
    });

    localStorage.setItem('Etudiants',JSON.stringify(etudiant));
}