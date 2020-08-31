import {criminalHTML} from './criminal.js';
import {getCriminals, useCriminals} from './criminalProvider.js';

export const criminalList = () => {
	getCriminals()
	.then(()=> {
		const criminalArray = useCriminals();
		console.log("criminalArray", criminalArray);
		addCriminalsToDOM(criminalArray);
	})
}

const addCriminalsToDOM = (aCriminalArray) => {
	const domElement = document.querySelector(".criminalsContainer");

	let HTMLArray = aCriminalArray.map(singleCriminal => {
		return criminalHTML(singleCriminal);
	})
	console.log("HTMLArray", HTMLArray);

	domElement.innerHTML = HTMLArray.join("");
}