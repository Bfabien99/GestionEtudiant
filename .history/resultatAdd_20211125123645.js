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
    poi
    let note = JSON.parse(localStorage.getItem('Etudiants')) || [];
    note.push({
        totalObtenu:totalObtenus.value,
        totalRequi:totalRequis.value,
        appreciation:(totalObtenus.value * 100) / totalRequis.value
    });

    localStorage.setItem('Notes',JSON.stringify(note));
}