// const questions = document.querySelectorAll('.question')
// questions.forEach(function(question){
//     const btn = question.querySelector('.question-btn')
//     btn.addEventListener('click',function(){
//         questions.forEach(function(item){
//             if(item!==question){
//                 item.classList.remove('show-text')
//             }
//         })
//         question.classList.add('show-text')
//     })
// })



const btns = document.querySelectorAll('.question-btn')

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        //Parent element is used to find the parent tag of tat particular button
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
    })
});