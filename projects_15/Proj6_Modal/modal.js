let modalb = document.querySelector(".modal-btn")
let modalo = document.querySelector(".modal-overlay")
let closeb = document.querySelector(".close-btn")
modalb.addEventListener('click', function(){
    modalo.classList.add('open-modal')
})
closeb.addEventListener('click', function(){
    modalo.classList.remove('open-modal')
})