
const table = document.querySelector('table');
const rechercheBar = document.querySelector('.top');
const info = document.querySelector('.infoEtudiant');
const tbody = document.querySelector('tbody');
const contenus = document.querySelector('.contenus');
const ajouterNoteEtudiant = document.querySelector('.ajouterNoteEtudiant');
const ajouterNote = document.querySelector('.add');




setInterval(afficherEtudiantDashboard(),10);

function afficherEtudiantDashboard(){
    if(localStorage.getItem('Etudiants')){
        let arr = JSON.parse(localStorage.getItem('Etudiants'));
        let id=1;
        tbody.innerHTML = "";
        for (let etudiant in arr) {
            tbody.innerHTML += `
            <tr class="user" id="${id}" onclick="afficheInfo(rid)">
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

const users = document.querySelectorAll('.user');

users.forEach(user => {
    console.log(user);
    user.addEventListener('click',function () {
        table.style.display="none";
        rechercheBar.style.display="none";
        info.style.display="flex";
        JSON.parse(localStorage.getItem('Etudiants')).forEach((user)=>{
            info.innerHTML =`
        <div class="box">

            <div class="infoLeft">
                <div class="img"></div>
            </div>

            <div class="infoRight">
                <p>Nom et prénoms : ${user.nom} &nbsp; ${user.prenom}</p>
                <p>Point obtenus : 50</p>
                <p>Point requis : 100</p>
                <p>Pourcentage : 50%</p>
                <div class="specialite">
                    &nbsp; ${user.specialite}
                </div>

                <div class="appreciation">
                    <p class="color"></p>
                </div>
                <a href="#" class="add"><i class="fa fa-pen"></i></a>
            </div>

        </div>

        <a a href="resultat.html" class="back"> Retour </a>
        `
        })
        
    })
});

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
            <button onclick="editData(${rid})"><span class="fa fa-pen"></span></button>
        </div>
    </div>
</div>
<a href="liste.html" class="retour">Retour</a>
`;
}
// ajouterNote.addEventListener('click',function () {
//     info.style.display="none";
//     ajouterNoteEtudiant.style.display="flex";
// })
