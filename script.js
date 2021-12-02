const myForm = document.getElementById('form');
    const nom = document.getElementById('nom');
    const password = document.getElementById('password');

    myForm.addEventListener('submit',function (e) {
        e.preventDefault();
        connect();
    })
    
    function connect(){
        if (localStorage.getItem('Admin')) {
            let arr = JSON.parse(localStorage.getItem('Admin'));
        for (admin in arr) {
        if (nom.value==arr[admin].identifiant && password.value==arr[admin].motDePasse) {
            location.href="dashboard.html"
        } else if (nom.value!==arr[admin].identifiant || password.value!==arr[admin].motDePasse){
            const error = document.getElementById('error');
            error.innerHTML ="Identifiant ou mot de passe incorrect"
            error.style.color ="red";
            setTimeout(function(){
            error.innerHTML ="";
        },1000)}

    }} else if (nom.value=="nan" && password.value=="nan2021") {
        location.href="dashboard.html"
    } else{
        const error = document.getElementById('error');
            error.innerHTML ="Identifiant ou mot de passe incorrect"
            error.style.color ="red";
            setTimeout(function(){
            error.innerHTML ="";
        },1000)
    }

       }