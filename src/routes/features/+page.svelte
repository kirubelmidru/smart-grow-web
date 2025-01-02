<script>
    let features = [
	{name: "Automated Control", description: ""},
	{name: "Ease of Access", description: ""},
	{name: "", description: ""}
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
    padding: 8rem;
    color: white;
}
.features-wrapper {
    padding: 8rem;
}
.features {
    max-width: 1240px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
}
@media only screen and (max-width: 1500px) {
    .team-list {
	max-width: 960px;
	grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (max-width: 960px) {
    .team-list {
	max-width: 540px;
	grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
p {
    font-size: 2rem;
}
</style>
