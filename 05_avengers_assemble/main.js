
console.log("Test")
console.log(avengers)

const container = document.querySelectorAll(".container")[0]
const assembleButton = document.querySelector("#assemble")
const hawkeyeButton = document.querySelector("#hawkeye")
const thanosButton = document.querySelector("#thanos")

// container.appendChild()

assembleButton.addEventListener("click",function(){

avengers.forEach(avenger=>{
    let card = cardMaker(avenger)
    container.appendChild(card)
})
})

hawkeyeButton.addEventListener("click", function(){
    let info = avengers.filter(avenger=>avenger.name==="Hawkeye")

    let card = cardMaker(info[0])
    
    container.appendChild(card)
})

thanosButton.addEventListener("click",function(){
    console.log("I done been clicked.")
    console.log("... and I am inevitable.")
    let collection = Array.from(container.children)
    for (let i = 0 ; i < (collection.length/2); i++){
        collection[i].remove()
    }
})

const cardMaker = (cardInfo) => {
    const {name, image, powers, actor, first_appearance} = cardInfo
    
    const card = document.createElement("section")
    card.classList.add("card")
    
    const nameElement = document.createElement("h1")
    nameElement.innerText = name
    
    const imageElement = document.createElement('img')
    imageElement.src=`images/${image}`
    imageElement.classList.add('hero-image')

    const powersElement = document.createElement("p")
    powersElement.innerText= `Powers: ${powers}`

    const actorElement = document.createElement("p")
    actorElement.innerText = `Played by: ${actor}`
    
    const firstAppearanceElement = document.createElement("p")
    firstAppearanceElement.innerText = `First Appearance: ${first_appearance}`
    
    card.appendChild(nameElement)
    card.appendChild(imageElement)
    card.appendChild(powersElement)
    card.appendChild(actorElement)
    card.appendChild(firstAppearanceElement)

    return card
}








































/*


const collectionHandler = () =>{
    avengers.forEach(element=>{
        let card = cardMaker(element)
        container.appendChild(card)
    })
}

const hawkeyeHandler = () => {
    let hawkeye= avengers.filter(avenger=>avenger.name =="Hawkeye")
    let card = cardMaker(hawkeye[0])
    container.appendChild(card)
}

const clearHandler = (e) => {
    const newContainer = document.querySelectorAll(".container")[0]
    let children = Array.from(container.children)
    console.log("children of container", children)
    children.forEach(child=>child.remove())
}

assembleButton.addEventListener("click",collectionHandler)
hawkeyeButton.addEventListener("click",hawkeyeHandler)
thanosButton.addEventListener("click", clearHandler)

*/

