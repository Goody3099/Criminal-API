import {getWitness, useWitness} from './witnessProvider.js'
import {WitnessHTML} from './witness.js'

export const witnessList = () => {
	getWitness()
	.then(()=> {
		const witnessArray = useWitness();
		addWitnessToDOM(witnessArray);
	})
}

const addWitnessToDOM = (aWitnessArray) => {
	const domElement = document.querySelector(".witnessContainer");

	let HTMLArray = aWitnessArray.map(singleWitness => {
		return WitnessHTML(singleWitness);
	})

	domElement.innerHTML = HTMLArray.join("");
}