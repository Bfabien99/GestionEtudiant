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
        totalObtenu:totalObtenus.value,
        totalObtenu:totalRequis.value,
        date:dateEtudiant.value,
    });

    localStorage.setItem('Etudiants',JSON.stringify(etudiant));
}