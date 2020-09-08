export const WitnessHTML = (witnessObj) => {
	return `
		<section id="witness-${witnessObj.id}" class="card-witness">
			<h2>Name: ${witnessObj.name}</h2>
		</section>
	`
}