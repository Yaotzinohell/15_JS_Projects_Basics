const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.querySelector(".btn")
const color = document.querySelector(".color")
console.log(hex.length)
btn.addEventListener('click', () => {
    let hexcolor = '#'
    for(let i=0; i<6; i++){
        hexcolor += hex[getRandomColor()]
    }
    document.body.style.backgroundColor = hexcolor
    color.innerHTML = hexcolor
})
const getRandomColor = () => {
    return Math.floor(Math.random() * 16)
}