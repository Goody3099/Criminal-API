import {getWitness, useWitness} from './witnessProvider.js'

export const witnessList = () => {
	getWitness()
	.then(()=> {
		const witnessArray = useWitness();
		//console.log("witnessArray", witnessArray);
		addWitnessToDOM(witnessArray);
	})
}

const addWitnessToDOM = (anWitnessArray) => {
	const domElement = document.querySelector(".witnessContainer");

	let HTMLArray = anWitnessArray.map(singleWitness => {
		return WitnessHTML(singleWitness);
	})
	//console.log("HTMLArray", HTMLArray);

	domElement.innerHTML = HTMLArray.join("");
}