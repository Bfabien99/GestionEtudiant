
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
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; 00${id}</td>
                <td> &nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
                <td>${arr[etudiant].pointObtenu}</td>
                <td>${arr[etudiant].pointRequi}</td>
                <td><p class="appreciation">${arr[etudiant].appreciation}</p></td>
            </tr>
            `;
            id++;
            console.log(arr[etudiant].nom)
        }
            
        let result = document.querySelector('.appreciation');
        if(parseInt(arr[etudiant].appreciation ) < 50){
            result.style.background="red";
        }
    }
}



function afficheInfo(rid){
	id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
    contenus.innerHTML = `<div class="affichebox">
    <div class="afficheInfo">
    <div class="boxs">
        <div class="infoLeft">
            <div class="img" style="background: url('${arr[rid].photo}') no-repeat center/cover"></div>
        </div>
        <div class="infoRight">
            <p>Nom & Prénoms :<strong> ${arr[rid].nom} ${arr[rid].prenom}</strong></p>
            <p>Total des points obtenus : ${arr[rid].pointObtenu}</p>
            <p>Total des points requis : ${arr[rid].pointRequi}</p>
            <p>Appreciation : ${arr[rid].appreciation}</p>
            <button onclick="editData(${rid})"><span class="fa fa-pen"></span></button>
        </div>
    </div>
    </div>
<a href="resultat.html" class="retour">Retour</a>
</div>
`;
}

function editData(rid){
	id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
    contenus.innerHTML = `<div class="formbox">
    <form name="form" id="myForm" autocomplete="off" onsubmit="ajouterNoteEtudiant(${rid})">
    <div class="img">
    <img src="${arr[rid].photo}" alt=""></div>
    <div class="divInput">

    <label for="obtenu">Total obtenu :</label>
    <input type="number" name="totalObtenus" id="totalObtenus" placeholder="total Obtenus">

    <label for="requis">Total requis :</label>
    <input type="number" name="totalRequis" id="totalRequis" placeholder="total Requis">

    <input type="submit" value="Enregistrer" class="submit">
    </div>
</form>
    <a href="resultat.html">annuler</a>
</div>`;
}

function ajouterNoteEtudiant(rid) {
    let arr = JSON.parse(localStorage.getItem('Etudiants'));
    arr[rid].pointObtenu += parseInt(document.getElementById('totalObtenus').value);
    arr[rid].pointRequi += parseInt(document.getElementById('totalRequis').value);

    arr[rid].pointObtenu=parseInt(arr[rid].pointObtenu);
    arr[rid].pointRequi=parseInt(arr[rid].pointRequi);
    arr[rid].appreciation = (arr[rid].pointObtenu * 100) /arr[rid].pointRequi;
    localStorage.setItem("Etudiants",JSON.stringify(arr));
}


// ajouterNote.addEventListener('click',function () {
//     info.style.display="none";
//     ajouterNoteEtudiant.style.display="flex";
// })
