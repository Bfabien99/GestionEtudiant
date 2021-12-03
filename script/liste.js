const user = document.querySelector('tbody');
const contenus = document.querySelector('.contenus');

setInterval(afficherEtudiantDashboard(),10);

/*Affiche les Etudiants inscrits*/
function afficherEtudiantDashboard(){
    if(localStorage.getItem('Etudiants')){
        let arr = JSON.parse(localStorage.getItem('Etudiants'));
        let id=1;
        user.innerHTML = "";
        for (let etudiant in arr) {
            user.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td>&nbsp; <img class="photoEtudiant" style="width:50px;height:50px;object-fit: cover;" src="${arr[etudiant].photo}" alt=""> &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].matricule} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].date} &nbsp;</td>
                <td> &nbsp; ${arr[etudiant].contact} &nbsp;</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
                <td>&nbsp; ${arr[etudiant].scolarite}</td>
                <td>&nbsp; <button onclick="event.stopPropagation();supStudent(${etudiant})"><span class="fa fa-trash"></span></button> </td>
            </tr>
            `;
            id++;
        }
    }
}
/*Fin*/

/*Affiche le Formulaire de Modification des informations de l'Etudiant l'Etudiant */
function editData(rid){
    
	id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
    contenus.innerHTML = `<form name="form" id="myForm" onsubmit="updateInfo(${rid})">
    <div class="formInput">
    <a href="liste.html" class="fermer"><span class="fa fa-times"></span></a>
        <h3>Modification des informations</h3>
        <div>
           <label for="nom">Nom</label>
        <input type="text" name="nom" id="nom" value="${arr[rid].nom}"> 
        </div>
        
        <div>
          <label for="prenom">Prenom</label>
        <input type="text" name="prenom" id="prenom" value="${arr[rid].prenom}">  
        </div>

        <div>
           <label for="date">Date de naissance</label>
        <input type="date" name="date" id="date" value="${arr[rid].date}"> 
        </div>
        
        <div>
            <label for="email">Email</label>
        <input type="email" name="email" id="email" value="${arr[rid].email}">
        </div>

        <div>
           <label for="contacts">Contact</label>
        <input type="number" name="contacts" id="contacts" value="${arr[rid].contact}"> 
        </div>

        <div>
            <label for="contactsParent">Contact des parents</label>
        <input type="number" name="contactsParent" id="contactsParent" value="${arr[rid].contactParent}">
        </div>

        <div>
            <label for="specialite">Spécialité</label>
            <select name="specialite" id="specialite" >
                <option value="${arr[rid].specialite}">${arr[rid].specialite}</option>
                <option value="flutter">FLUTTER</option>
                <option value="frontEnd">FRONT-END</option>
                <option value="javaScript">JAVASCRIPT</option>
                <option value="marketing">MARKETING</option>
                <option value="php">PHP</option>
                <option value="python">PYTHON</option>
            </select>
        </div>

        <div>
            <label for="scolarite">Montant versé</label>
        <input type="number" name="scolarite" id="scolarite" value="${arr[rid].scolarite}">
        </div>

        <div class="photoInput">
            <input type="file" name="addPhoto" id="addPhoto" src="${arr[rid].photo}">
            <a >Ajouter une photo</a>
        </div>
    </div>
    
    <input type="submit" value="Enregistrer" class="submit">
</form>`;

/*Obtenir l'URL de l'image*/
const photoEtudiant = document.getElementById('addPhoto');
    photoEtudiant.addEventListener("change",function(){
        const reader = new FileReader();
    
        reader.addEventListener('load',(e)=>{
            photoEtudiant.src = reader.result;
        });
    
        reader.readAsDataURL(this.files[0]);
    });
}
/*Fin*/

/*Changer photo de l'Admin sur le dashboard*/
let arr = JSON.parse(localStorage.getItem('Admin'));
    for (admin in arr) {
        const adminPic = document.querySelector('.photoAdmin')
        adminPic.style.background=`url(${arr[admin].photo}) no-repeat center/cover`

    }
/*Fin*/

/*Enregistre les modifications des informations de l'Etudiant */
function updateInfo(rid){
    id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));

        arr[rid].nom = document.getElementById('nom').value.toUpperCase();   
        arr[rid].prenom = document.getElementById('prenom').value.toUpperCase();
        arr[rid].date = document.getElementById('date').value;
        arr[rid].email = document.getElementById('email').value.toLowerCase();
        arr[rid].contact = document.getElementById('contacts').value;
        arr[rid].contactParent = document.getElementById('contactsParent').value;
        arr[rid].specialite = document.getElementById('specialite').value.toUpperCase();
        arr[rid].scolarite = document.getElementById('scolarite').value;
        arr[rid].photo = document.getElementById('addPhoto').src;   
   
    localStorage.setItem("Etudiants", JSON.stringify(arr));
}
/*Fin*/

/*Affiche les informations de l'Etudiant sélectionner*/
function afficheInfo(rid){
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
    let mr = 600000 - arr[rid].scolarite;
    contenus.innerHTML = `<div class="afficheInfo">
    <div class="box">
        <div class="infoLeft">
            <div class="img" style="background: url('${arr[rid].photo}') no-repeat center/cover">
            </div>
            <div class="specialite">${arr[rid].specialite}</div>
            <div class="scolarite">
                <p class="mv">Total Versé</p>
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
            <button onclick="editData(${rid})"><span class="fa pen fa-pen"></span></button>
        </div>
    </div>
</div>
<a href="liste.html" class="retour">Retour</a>
`;
}
/*Fin*/

/*Supprimer l'Etudiant */
function supStudent(rid){
    let arr = JSON.parse(localStorage.getItem('Etudiants'));
    let ind = arr.indexOf(arr[rid]);
    if(confirm(`Voulez vous vraiment supprimer ${arr[rid].nom} ${arr[rid].prenom}` )){
      arr.splice(ind,1);

        localStorage.setItem("Etudiants",JSON.stringify(arr));
        document.location.reload();  
    }
}
/*Fin*/

/*Recherché un étudiant*/
const searchInput = document.getElementById('recherche');

searchInput.addEventListener('keyup', function(){
    let arr = JSON.parse(localStorage.getItem('Etudiants'));
    const input = searchInput.value
    let sugg = '';
    let id = 1;
    
    for(etudiant in arr){
        if (input !== "") {
            if(arr[etudiant].nom.includes(input.trim().toUpperCase()) || arr[etudiant].prenom.includes(input.trim().toUpperCase())){
                sugg += `
                <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td>&nbsp; <img class="photoEtudiant" style="width:50px;height:50px;object-fit: cover;" src="${arr[etudiant].photo}" alt=""> &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].matricule} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].date} &nbsp;</td>
                <td> &nbsp; ${arr[etudiant].contact} &nbsp;</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
                <td>&nbsp; ${arr[etudiant].scolarite}</td>
                <td>&nbsp; <button onclick="event.stopPropagation();supStudent(${etudiant})"><span class="fa fa-trash"></span></button> </td>
            </tr>
                        `
        }
                    
        user.innerHTML = sugg;
        }
        else{
            afficherEtudiantDashboard();
        }
    }
    
})
/*Fin*/