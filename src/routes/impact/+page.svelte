<script>
let impacts = [
    {name: "", description: ""},
    {name: "", description: ""},
    {name: "", description: ""},
    {name: "", description: ""},
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
    height: 100vh;
    padding: 8rem;
}
p {
    font-size: 2rem;
}
</style>
