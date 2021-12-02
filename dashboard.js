const user = document.querySelector('tbody');
const contenus = document.querySelector('.contenus');

setInterval(afficherEtudiantDashboard(),10);

/*Changer photo de l'Admin sur le dashboard*/
let arr = JSON.parse(localStorage.getItem('Admin'));
    for (admin in arr) {
        const adminPic = document.querySelector('.photoAdmin')
        adminPic.style.background=`url(${arr[admin].photo}) no-repeat center/cover`

    }
/*Fin*/


function afficherEtudiantDashboard(){
    if(localStorage.getItem('Etudiants')){
        let arr = JSON.parse(localStorage.getItem('Etudiants'));
        let id=1;
        user.innerHTML = "";
        for (let etudiant in arr) {
            user.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
            </tr>
            `;
            id++;
        }
    }
}

function afficheInfo(rid){
	id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
    let mr = 600000 - arr[rid].scolarite;
    contenus.innerHTML = `<div class="affichebox">
    <div class="afficheInfo">
    <div class="box">
        <div class="infoLeft">
            <div class="img" style="background: url('${arr[rid].photo}') no-repeat center/cover"></div>
            <div class="specialite">${arr[rid].specialite}</div>
            <div class="scolarite">
                <h3>Scolarité</h3>
                <p class="mv">Montant Versé</p>
                <p class="somme">${arr[rid].scolarite}</p>
                <p p class="rp">Reste à payer</p>
                <p class="somme">${mr}</p>
            </div>
        </div>
        <div class="infoRight">
            <p>Nom & Prénoms : ${arr[rid].nom} ${arr[rid].prenom}</p>
            <p>Date de naissance : ${arr[rid].date}</p>
            <p>Contact : ${arr[rid].contact}</p>
            <p>Email : ${arr[rid].email}</p>
            <p>Contact Parent : ${arr[rid].contactParent}</p>
            <button onclick="editData(${rid})" style="display:none;"><span class="fa fa-pen"></span></button>
        </div>
    </div>
    </div>
<a href="dashboard.html" class="retour">Retour</a>
</div>

`;
}


/*Recherché un étudiant*/
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', function(){
    let arr = JSON.parse(localStorage.getItem('Etudiants'));
    const input = searchInput.value
    const result = arr.filter(item => item.nom.toLocaleUpperCase().includes(input.toLocaleUpperCase()) || item.prenom.toLocaleUpperCase().includes(input.toLocaleUpperCase()));
    let sugg = '';
    let id = 1;
    if(input !== ""){result.forEach(resultItem => sugg += `
    <tr class="user ${resultItem.specialite}" id="${id}" onclick="afficheInfo(${resultItem})">
                <td>&nbsp; <img class="photoEtudiant" style="width:50px;height:50px;object-fit: cover;" src="${resultItem.photo}" alt=""> &nbsp;</td>
                <td>&nbsp; ${resultItem.nom} &nbsp; ${resultItem.prenom}</td>
                <td> &nbsp; ${resultItem.email} &nbsp;</td>
                <td>&nbsp; ${resultItem.specialite}</td>
                <td>&nbsp; ${resultItem.scolarite}</td>
            </tr>
    `)
user.innerHTML = sugg;
}
else{
    afficherEtudiantDashboard()
}
    
})
/*Fin*/

