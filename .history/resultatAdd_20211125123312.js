const myForm = document.getElementById('myForm');
const totalObtenus = document.getElementById('totalObtenus');
const totalRequis = document.getElementById('totalRequis');

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(totalObtenus.value);
    myForm.reset();
})

function ajouterNoteEtudiant() {
    let note = JSON.parse(localStorage.getItem('Etudiants')) || [];
    note.push({
        totalObtenu:totalObtenus.value,
        totalRequi:totalRequis.value,
        appreciation:(totalObtenus.value * 100) / totalRequis.value
    });

    localStorage.setItem('Notes',JSON.stringify(note));
}