const myDiv = document.getElementById("my-div")
const div2 = document.getElementById("div-2")

myDiv.innerHTML = `
    <button>Click Me </button>
`

document.write("Hello")


console.log(myDiv)

div2.addEventListener("click", ()=> {
    div2.style.background = 'red'
})

div2.addEventListener("mouseenter", ()=> {
    div2.style.background = 'green'
})

div2.addEventListener("", ()=> {
    div2.style.background = 'blue'
})