const myForm = document.getElementById('myForm');
const totalObtenus = document.getElementById('totalObtenus');
const totalRequis = document.getElementById('totalRequis');

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log((totalObtenus.value * 100) / totalRequis.value);
    ajouterNoteEtudiant()
    myForm.reset();
})

function ajouterNoteEtudiant() {
    let pointObtenu = totalObtenus.value;
    let pointRequi = totalRequis.value;
    
    let note = JSON.parse(localStorage.getItem('Etudiants'));
    for (let etudiant in note) {
        note.push({
        totalObtenu:pointObtenu,
        totalRequi:pointRequi,
        appreciation:(pointObtenu * 100) / pointRequi
    });
    }
    
    localStorage.setItem('Etudiants',JSON.stringify(note));
}