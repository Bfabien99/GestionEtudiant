
const table = document.querySelector('table');
const rechercheBar = document.querySelector('.top');
const info = document.querySelector('.infoEtudiant');
const tbody = document.querySelector('tbody');
const contenus = document.querySelector('.contenus');
const ajouterNote = document.querySelector('.add');




setInterval(afficherEtudiantDashboard(),10);

function afficherEtudiantDashboard(){
    if(localStorage.getItem('Etudiants')){
        let arr = JSON.parse(localStorage.getItem('Etudiants'));
        let id=1;
        tbody.innerHTML = "";
        for (let etudiant in arr) {
            tbody.innerHTML += `
            <tr class="user" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;border-radius: 50%;object-fit: cover;" src="alex.jpg" alt=""></td>
                <td>&nbsp; 00${id}</td>
                <td> &nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
                <td>${arr[etudiant].totalObtenu}</td>
                <td>${arr[etudiant].totalRequi}</td>
                <td>${arr[etudiant].appreciation}</td>
            </tr>
            `;
            id++;
        }
            
        
    }
}



function afficheInfo(rid){
	id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
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
                <p class="somme"></p>
            </div>
        </div>
        <div class="infoRight">
            <p>Nom & Prénoms : ${arr[rid].nom} ${arr[rid].prenom}</p>
            <p>Date de naissance : ${arr[rid].date}</p>
            <p>Contact : ${arr[rid].contact}</p>
            <p>Email : ${arr[rid].email}</p>
            <p>Contact Parent : ${arr[rid].contactParent}</p>
            <button onclick="editData(${rid})"><span class="fa fa-pen"></span></button>
        </div>
    </div>
</div>
<a href="resultat.html" class="retour">Retour</a>
`;
}

function editData(rid){
	id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
    contenus.innerHTML = `<form name="form" id="myForm" autocomplete="off" onsubmit="ajouterNoteEtudiant()">
    <input type="number" name="totalObtenus" id="totalObtenus" placeholder="total Obtenus">
    <input type="number" name="totalRequis" id="totalRequis" placeholder="total Requis">
    <input type="submit" value="Enregistrer" class="submit">
</form>
    <a href="resultat.html">annuler</a>
</form>`;
}

function ajouterNoteEtudiant() {
    let totalObtenus = document.getElementById('totalObtenus');
    let totalRequis = document.getElementById('totalRequis');

    let pointObtenu = totalObtenus.value;
    let pointRequi = totalRequis.value;
    
    let note = JSON.parse(localStorage.getItem('Notes')) || [];
    
        note.push({
        totalObtenu:pointObtenu,
        totalRequi:pointRequi,
        appreciation:(pointObtenu * 100) / pointRequi
        })
    
    localStorage.setItem('Notes',JSON.stringify(note));
}

const map = [];
map.push(JSON.parse(localStorage.getItem('Etudiants')).concat(JSON.parse(localStorage.getItem('Notes'))))
console.log(map);

const is = JSON.parse(localStorage.getItem('Etudiants'));
const nno = JSON.parse(localStorage.getItem('Notes'));

for(let aa in is)

// ajouterNote.addEventListener('click',function () {
//     info.style.display="none";
//     ajouterNoteEtudiant.style.display="flex";
// })
