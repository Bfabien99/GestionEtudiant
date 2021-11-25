const myForm = document.getElementById('myForm');
const totalObtenus = document.getElementById('totalObtenus');
const totalRequis = document.getElementById('totalRequis');

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log((totalObtenus.value * 100) / totalRequis.value);
    ajouterNoteEtudiant()
    myForm.reset();
})

