
const table = document.querySelector('table');
const rechercheBar = document.querySelector('.top');
const info = document.querySelector('.infoEtudiant');
const tbody = document.querySelector('tbody');
const contenus = document.querySelector('.contenus');
const ajouterNote = document.querySelector('.add');


setInterval(afficherEtudiantDashboard(),10);


/*Changer photo de l'Admin sur le dashboard*/
let arr = JSON.parse(localStorage.getItem('Admin'));
    for (admin in arr) {
        const adminPic = document.querySelector('.photoAdmin')
        adminPic.style.background=`url(${arr[admin].photo}) no-repeat center/cover`
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
                <tr class="user" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].matricule}</td>
                <td> &nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
                <td>${arr[etudiant].pointObtenu}</td>
                <td>${arr[etudiant].pointRequi}</td>
                <td><p class="appreciation ${arr[etudiant].appreciation < 40 ? 'rouge' : (arr[etudiant].appreciation > 40 &&  arr[etudiant].appreciation < 64) ? 'orange' : 'vert'}">${arr[etudiant].appreciation}</p></td>
            </tr>
                        `}
        tbody.innerHTML = sugg;
        }
        else{
            afficherEtudiantDashboard();
        }
    }
    
})
/*Fin*/

function afficherEtudiantDashboard(){
    if(localStorage.getItem('Etudiants')){
        let arr = JSON.parse(localStorage.getItem('Etudiants'));
        let id=1;
        tbody.innerHTML = "";
        for (let etudiant in arr) {
            tbody.innerHTML += `
            <tr class="user" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].matricule}</td>
                <td> &nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
                <td>${arr[etudiant].pointObtenu}</td>
                <td>${arr[etudiant].pointRequi}</td>
                <td><p class="appreciation ${arr[etudiant].appreciation < 40 ? 'rouge' : (arr[etudiant].appreciation > 40 &&  arr[etudiant].appreciation < 64) ? 'orange' : 'vert'}">${arr[etudiant].appreciation}</p></td>
            </tr>
            `;
           id++; 

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
            <p class="specialite"> ${arr[rid].specialite}</p>
            <p class="Appr ${arr[rid].appreciation < 40 ? 'rouge' : (arr[rid].appreciation > 40 &&  arr[rid].appreciation < 64) ? 'orange' : 'vert'}">${arr[rid].appreciation}">Appreciation : ${arr[rid].appreciation}</p>
            <button onclick="editNote(${rid})" class="edit"><span class="fa fa-pen"></span></button>
        </div>
    </div>
    </div>
<a href="resultat.html" class="back">Retour</a>
</div>
`;
}

function editNote(rid){
	id=rid;
	let arr=JSON.parse(localStorage.getItem('Etudiants'));
    contenus.innerHTML = `<div class="formbox">
    <form name="form" id="myForm" autocomplete="off" onsubmit="ajouterNoteEtudiant(${rid})">
    <div class="img" style="background: url('${arr[rid].photo}') no-repeat center/cover"></div>
    <div class="divInput">

    <label for="obtenu">Total obtenu :</label>
    <input type="number" name="totalObtenus" id="totalObtenus" placeholder="total Obtenus">

    <label for="requis">Total requis :</label>
    <input type="number" name="totalRequis" id="totalRequis" placeholder="total Requis">

    <input type="submit" value="Enregistrer" class="ok">
    </div>
</form>
    <a href="resultat.html" class="back">Retour</a>
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



