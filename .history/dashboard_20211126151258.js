const user = document.querySelector('tbody');
const contenus = document.querySelector('.contenus');

setInterval(afficherEtudiantDashboard(),10);

function afficherEtudiantDashboard(){
    if(localStorage.getItem('Etudiants')){
        let arr = JSON.parse(localStorage.getItem('Etudiants'));
        let id=1;
        user.innerHTML = "";
        for (let etudiant in arr) {
            user.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
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

function afficheInfo(rid){
	id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
    let mr = 600000 - arr[rid].scolarite;
    contenus.innerHTML = `<div class="afficheInfo">
    <div class="box">
        <div class="infoLeft">
            <div class="img"></div>
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
    <a href="dashboard.html" class="retour">Retour</a>
</div>

`;
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup',function(){
    let arr=JSON.parse(localStorage.getItem('Etudiants'));
    const input = searchInput.value;
    if (input!=="") {
      const result = arr.filter(item => item.nom.includes(input.toUpperCase()));

      let sugg='';
        result.forEach(stud =>
            {
            sugg = `
            <tr class="user ${stud.specialite}"onclick="afficheInfo(${stud})">
                <td><img class="photoEtudiant" style="width:50px;border-radius: 50%;object-fit: cover;" src="alex.jpg" alt=""></td>
                <td>&nbsp; ${stud.nom} &nbsp; ${stud.prenom}</td>
                <td> &nbsp; ${stud.email} &nbsp;</td>
                <td>&nbsp; ${stud.specialite}</td>
            </tr>
            `;
            }
            )
            user.innerHTML = sugg;
    console.log(result);  
    }else{
        afficherEtudiantDashboard()
    }
    

})


