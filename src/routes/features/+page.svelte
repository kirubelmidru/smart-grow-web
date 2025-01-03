<script>
    let features = [
	{name: "Automated Control", description: "Automatic control in smart plant growing systems is a feature that leverages technology and data to manage plant care with minimal human intervention. It uses sensors, algorithms, and pre-programmed parameters to ensure optimal growing conditions, making plant cultivation efficient and convenient."},
	{name: "Ease of Access", description: "Ease of access in smart plant growing systems focuses on designing user-friendly features and interfaces that make these systems simple to use, regardless of the user's experience level. This ensures that both beginners and experienced growers can effectively manage their plants with minimal learning curves or frustration."},
	{name: "Manual Control", description: "Manual control in smart plant growing systems allows users to override or customize automated settings, giving them direct control over specific parameters and processes. This feature is essential for advanced users or those with unique growing requirements, enabling fine-tuning and experimentation beyond the default automation."}
    ];
</script>

<div class="feature-hero">
    <h2 style="font-size: 8rem; text-align: center;">Our Features</h2>
</div>
<div class="features-wrapper">
    {#each features as feature}
	<div class="features">
	    <h2>{feature.name}</h2>
	    <p>{feature.description}</p>
	</div>
    {/each}
</div>

<style>
.feature-hero {
    height: 100vh;
    background: black;
    padding: 4rem;
    color: white;
}
.features-wrapper {
    max-width: 1240px;
    margin: 0 auto;
    padding: 16rem 4rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8rem;
}
@media only screen and (max-width: 1500px) {
    .features-wrapper {
	max-width: 960px;
	grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (max-width: 960px) {
    .features-wrapper {
	max-width: 540px;
	grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
p {
    font-size: 1rem;
}
</style>
