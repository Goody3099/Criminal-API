import {criminalHTML} from './criminal.js';
import {getCriminals, useCriminals} from './criminalProvider.js';

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeId" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
	   const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(taco => {
			if(taco.conviction === event.detail.crimeThatWasChosen){
				return true
			} else {
				return false
			}
		})

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
	   render(matchingCriminals)
	}
})
eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const matchingOfficers = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
	)
	render(matchingOfficers)
})
export const criminalList = () => {
	getCriminals()
	.then(()=> {
		const appStateCriminals = useCriminals()
            render(appStateCriminals)
	})
}

const render = aCriminalArray => {
    const domElement = document.querySelector(".criminalsContainer");

	let HTMLArray = aCriminalArray.map(singleCriminal => {
		return criminalHTML(singleCriminal);
	})

	domElement.innerHTML = HTMLArray.join("");
}