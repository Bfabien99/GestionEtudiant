const users = document.querySelectorAll('.user');
const table = document.querySelector('table');
const rechercheBar = document.querySelector('.top');
const info = document.querySelector('.infoEtudiant');
const ajouterNoteEtudiant = document.querySelector('.ajouterNoteEtudiant');
const ajouterNote = document.querySelector('.add');

users.forEach(user => {
    console.log(user);
    user.addEventListener('click',function () {
        table.style.display="none";
        rechercheBar.style.display="none";
        info.style.display="flex";
    })
});

ajouterNote.addEventListener('click',function () {
    info.style.display="none";
    ajouterNoteEtudiant.style.display="flex";
})