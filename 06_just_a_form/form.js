let form = document.getElementsByTagName("form")[0]

let buttons = document.getElementsByTagName("input")
console.log(buttons)

button.addEventListener("click",function(){
    console.log("I've been clicked!")
})

form.addEventListener("submit",function(e){
    e.preventDefault()
})



