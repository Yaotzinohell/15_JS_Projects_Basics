const colors=["green", "red", "rgba(133,122,200)", "#f15025"]
const color = document.querySelector('.color')
const btn = document.querySelector('.btn')

function changecolor() {
    var randomColor = getRandomColor()
    document.body.style.backgroundColor = colors[randomColor]
    color.innerHTML = colors[randomColor]
}

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', ()=>{
    changecolor()
})