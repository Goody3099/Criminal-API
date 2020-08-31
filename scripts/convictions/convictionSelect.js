import {useConvictions} from './convictionProvider.js'

const contentTarget = document.querySelector(".filters__crimes")

export const convictionSelect = () => {
    const convictions = useConvictions()

    const render = convictionsCollection => {
        contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value=0>Please select a crime...</option>
            ${convictionsCollection.map(crimeObj => {
                const crimeName = crimeObj.name
                return `<option value=${crimeObj.id}>${crimeName}</option>`
            })}
        </select>`
    }
    render(convictions)
}