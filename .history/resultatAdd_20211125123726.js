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
    pointObtenu+=
    let note = JSON.parse(localStorage.getItem('Etudiants')) || [];
    note.push({
        totalObtenu:pointObtenu,
        totalRequi:totalRequis.value,
        appreciation:(totalObtenus.value * 100) / totalRequis.value
    });

    localStorage.setItem('Notes',JSON.stringify(note));
}