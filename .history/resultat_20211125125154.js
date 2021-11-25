
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
        let Not = JSON.parse(localStorage.getItem('Notes'));
        let id=1;
        tbody.innerHTML = "";
        for (let etudiant in arr){
            for (let note in Not) {
                tbody.innerHTML += `
            <tr class="user" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;border-radius: 50%;object-fit: cover;" src="alex.jpg" alt=""></td>
                <td>&nbsp; 00${id}</td>
                <td> &nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
                <td>${Not[note].totalObtenu}</td>
                <td>${Not[note].totalRequi}</td>
                <td>${Not[note].appreciation}</td>
            </tr>
            `;
            id++;
            }
            
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
    contenus.innerHTML = `<form name="form" id="myForm" onsubmit="updateInfo(${rid})">
    <div class="formInput">
        <h3>Modification des informations</h3>
        <div>
           <label for="nom">Nom</label>
        <input type="text" name="nom" id="nom" placeholder="${arr[rid].nom}"> 
        </div>
        
        <div>
          <label for="prenom">Prenom</label>
        <input type="text" name="prenom" id="prenom" placeholder="${arr[rid].prenom}">  
        </div>

        <div>
           <label for="date">Date de naissance</label>
        <input type="date" name="date" id="date" placeholder="${arr[rid].date}"> 
        </div>
        
        <div>
            <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="${arr[rid].email}">
        </div>

        <div>
           <label for="contacts">Contact</label>
        <input type="number" name="contacts" id="contacts" placeholder="${arr[rid].contact}"> 
        </div>

        <div>
            <label for="contactsParent">Contact des parents</label>
        <input type="number" name="contactsParent" id="contactsParent" placeholder="${arr[rid].contactParent}">
        </div>

        <div>
            <label for="specialite">Spécialité</label>
            <select name="specialite" id="specialite">
                <option value="Aucun">-- spécialité --</option>
                <option value="flutter">FLUTTER</option>
                <option value="frontEnd">FRONT-END</option>
                <option value="javaScript">JAVASCRIPT</option>
                <option value="marketing">MARKETING DIGITAL</option>
                <option value="php">PHP</option>
                <option value="python">PYTHON</option>
            </select>
        </div>

        <div>
            <label for="scolarite">Montant versé</label>
        <input type="number" name="scolarite" id="scolarite" placeholder="${arr[rid].scolarite}">
        </div>

        <div class="photoInput">
            <input type="file" name="addPhoto" id="addPhoto" title="${arr[rid].photo}">
            <a >Ajouter une photo</a>
        </div>
    
    </div>
    
    <input type="submit" value="Enregistrer" class="submit">
    <a href="resultat.html">annuler</a>
</form>`;
}
// ajouterNote.addEventListener('click',function () {
//     info.style.display="none";
//     ajouterNoteEtudiant.style.display="flex";
// })
