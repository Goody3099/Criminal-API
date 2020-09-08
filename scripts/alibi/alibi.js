import {useCriminals} from '../criminals/criminalProvider.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event =>{
    if(event.target.id.startsWith("associates--")){
        let [perfix, id] = event.target.id.split("--")
        const thing = new CustomEvent("taco", {
            detail:{
                chosenCriminal:id
            }
        })
        eventHub.dispatchEvent(thing)
    }
})

eventHub.addEventListener("taco", event =>{
    const targetCriminal = useCriminals().find(criminal =>{
        return criminal.id === parseInt(event.detail.chosenCriminal)
    })
    const alibiTarget = document.querySelector(`.alibiDialog--${targetCriminal.id}`)
    alibiTarget.innerHTML = `
        ${targetCriminal.known_associates.map((associate)=> {
            return `
            <h4>${associate.name}</h4>
            <div>${associate.alibi}</div>
            `
        }).join("")}
    `
})


export const alibiDialog = (id) => {
    return `
    <span class="alibiDialog--${id}"></span>
    `
}