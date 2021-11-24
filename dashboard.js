const user = document.querySelector('tbody');

setInterval(afficherEtudiantDashboard(),10);

function afficherEtudiantDashboard(){
    if(localStorage.getItem('Etudiants')){
        let arr = JSON.parse(localStorage.getItem('Etudiants'));
        let id=1;
        user.innerHTML = "";
        for (let etudiant in arr) {
            user.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}">
                <td><img class="photoEtudiant" style="width:50px;border-radius: 50%;object-fit: cover;" src="alex.jpg" alt=""></td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
            </tr>
            `;
            id++;
        }
    }
}


