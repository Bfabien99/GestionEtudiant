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
            <button onclick="editData(${rid})" style="display:none;"><span class="fa fa-pen"></span></button>
        </div>
    </div>
    </div>
<a href="dashboard.html" class="retour">Retour</a>
</div>

`;
}



//Identifier le nombre d'etudiant
const nombreEtudiant = document.querySelector('.nombreEtudiant');
    if (localStorage.getItem('Etudiants')) {
        nombreEtudiant.innerHTML = JSON.parse(localStorage.getItem('Etudiants')).length;
    } else {
            nombreEtudiant.innerHTML = 0;
        }

const parent = document.querySelector('tbody');

var js = parent.getElementsByClassName("JAVASCRIPT");
var frontEnd = parent.getElementsByClassName("FRONTEND");
var marketing = parent.getElementsByClassName("MARKETING");
var flutter = parent.getElementsByClassName("FLUTTER");
var php = parent.getElementsByClassName("PHP");
var python = parent.getElementsByClassName("PYTHON");

document.querySelector('.phpList').innerHTML=`${php.length}`;
document.querySelector('.javascriptList').innerHTML=`${js.length}`
document.querySelector('.pythonList').innerHTML=`${python.length}`;
document.querySelector('.flutterList').innerHTML=`${flutter.length}`;
document.querySelector('.marketingList').innerHTML=`${marketing.length}`;
document.querySelector('.frontEndList').innerHTML=`${frontEnd.length}`;



const specialite = document.querySelectorAll('.etudiantParSpecialite div');
specialite.forEach(function(el){
    el.addEventListener('click',function(){
        let arr = JSON.parse(localStorage.getItem('Etudiants'));

        if(el.classList.contains('php')){
            let id=1;
            parent.innerHTML = "";
        for (let etudiant in arr) {
            if(arr[etudiant].specialite == "PHP")
            {parent.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
            </tr>
            `;
            id++;}
        }} 

        if(el.classList.contains('frontend')){
            let id=1;
            parent.innerHTML = "";
        for (let etudiant in arr) {
            if(arr[etudiant].specialite == "FRONTEND")
            {parent.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
            </tr>
            `;
            id++;}
        }}

        if(el.classList.contains('javascript')){
            let id=1;
            parent.innerHTML = "";
        for (let etudiant in arr) {
            if(arr[etudiant].specialite == "JAVASCRIPT")
            {parent.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
            </tr>
            `;
            id++;}
        }} 

        if(el.classList.contains('python')){
            let id=1;
            parent.innerHTML = "";
        for (let etudiant in arr) {
            if(arr[etudiant].specialite == "PYTHON")
            {parent.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
            </tr>
            `;
            id++;}
        }}

        if(el.classList.contains('flutter')){
            let id=1;
            parent.innerHTML = "";
        for (let etudiant in arr) {
            if(arr[etudiant].specialite == "FLUTTER")
            {parent.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
            </tr>
            `;
            id++;}
        }} 

        if(el.classList.contains('marketing')){
            let id=1;
            parent.innerHTML = "";
        for (let etudiant in arr) {
            if(arr[etudiant].specialite == "MARKETING")
            {parent.innerHTML += `
            <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                <td><img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""></td>
                <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                <td>&nbsp; ${arr[etudiant].specialite}</td>
            </tr>
            `;
            id++;}
        }}
        

    })
})

/*Recherché un étudiant*/
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', function(){
    let arr = JSON.parse(localStorage.getItem('Etudiants'));
    const input = searchInput.value.replace(/ /g, "");
    let sugg = '';
    let id = 1;
    for(etudiant in arr){
        let rech = arr[etudiant].nom + "" + arr[etudiant].prenom.replace(/ /g, "");
        if (input !== "") {
            if(rech.includes(input.trim().toUpperCase())){
                sugg += `
                        <tr class="user ${arr[etudiant].specialite}" id="${id}" onclick="afficheInfo(${etudiant})">
                            <td>&nbsp; <img class="photoEtudiant" style="width:50px;height:50px;border-radius: 50%;object-fit: cover;" src="${arr[etudiant].photo}" alt=""> &nbsp;</td>
                            <td>&nbsp; ${arr[etudiant].nom} &nbsp; ${arr[etudiant].prenom}</td>
                            <td> &nbsp; ${arr[etudiant].email} &nbsp;</td>
                            <td>&nbsp; ${arr[etudiant].specialite}</td>
                            <td>&nbsp; ${arr[etudiant].scolarite}</td>
                        </tr>
                        `}
        user.innerHTML = sugg;
        }
        else{
            afficherEtudiantDashboard();
        }
    }
    
})
/*Fin*/



