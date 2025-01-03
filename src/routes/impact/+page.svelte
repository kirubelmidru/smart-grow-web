<script>
let impacts = [
    {name: "Resource Efficiency", description: "Resource efficiency in smart plant growing systems refers to the optimization of inputs such as water, energy, nutrients, and space to maximize plant growth while minimizing waste and environmental impact. These systems leverage advanced technologies to ensure sustainable and cost-effective plant cultivation."},
    {name: "Convenience", description: "Convenience in smart plant growing systems refers to the ease and simplicity these systems provide to users in managing and maintaining plant growth. By integrating automation, intuitive interfaces, and remote management capabilities, they minimize the time, effort, and expertise required for successful cultivation."},
    {name: "Urban Sustainability", description: "Urban sustainability involves practices that help cities manage resources responsibly, reduce environmental impacts, and improve the quality of life for residents. Smart plant growing systems contribute significantly to urban sustainability by enabling efficient and eco-friendly food production within city limits."},
    {name: "Food Security", description: "Food security means ensuring all individuals have access to sufficient, safe, and nutritious food. Smart plant growing systems address several challenges associated with food security, especially in urban and resource-scarce areas."},
];
</script>

<div class="impact-hero">
    <h2 style="font-size: 8rem; text-align: center;">Our Impact</h2>
</div>
<div class="impact-wrapper">
    {#each impacts as impact}
	<div class="impacts">
	    <h2>{impact.name}</h2>
	    <p>{impact.description}</p>
	</div>
    {/each}
</div>

<style>
.impact-hero {
    height: 100vh;
    background: black;
    padding: 8rem;
    color: white;
}
.impact-wrapper {
    max-width: 1240px;
    margin: 0 auto;
    padding: 16rem 4rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8rem;
}
@media only screen and (max-width: 1500px) {
    .impact-wrapper {
	max-width: 960px;
	grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (max-width: 960px) {
    .impact-wrapper {
	max-width: 540px;
	grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
h2 {
    font-size: 2rem;
}
</style>
