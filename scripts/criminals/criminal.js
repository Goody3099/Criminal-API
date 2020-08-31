export const criminalHTML = (criminalObj) => {
	return `
		<section id="criminal-${criminalObj.id}" class="card-criminal">
			<h2>Name: ${criminalObj.name}</h2>
			<div>
				<div>Age: ${criminalObj.age}</div>
				<div>Crime Convicted of: ${criminalObj.conviction}</div>
				<div>Start of Incarceration: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</div>
				<div>End of Incarceration: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</div>
			</div>
		</section>
	`
}