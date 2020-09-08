import { useWitness, getWitness } from './witnessProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__witness")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "witnessSelect") {
        // Get the name of the selected officer
        const selectedWitness = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("witnessSelected", {
            detail: {
                witness: selectedWitness
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = witnessCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="witnessSelect">
            <option value="0">Please select a witness...</option>
            ${witnessCollection.map(witnessObj => {
                const witnessName = witnessObj.name
                return `<option id="${witnessObj.id}" value="${witnessName}">${witnessName}</option>`
            })}
        </select>
    `
}
export const WitnessSelect = () => {
    getWitness()
        .then(() => {
            const witness = useWitness()
            render(witness)
        })
}