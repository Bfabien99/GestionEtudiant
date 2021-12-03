function toggleMenu() {
    let naviguation = document.querySelector('.naviguation');
    let photoAdmin = document.querySelector('.photoAdmin');
    let main = document.querySelector('.main');
    let toggle = document.querySelector('.toggle');
    

    naviguation.classList.toggle('active');
    photoAdmin.classList.toggle('active');
    main.classList.toggle('active');
    toggle.classList.toggle('active');
    
}