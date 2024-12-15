<script>
import ScrollIndicator from "$lib/components/misc/ScrollIndicator.svelte";
</script>

<div class="features-wrapper">
    <h2 style="text-align: center; font-size: 8rem;">Features</h2>
    <div class="scroll-wrapper">
	<ScrollIndicator/>
    </div>
</div>

<style>
.features-wrapper {
    height: 100vh;
    background: black;
    padding: 8rem;
}
.features-wrapper {
    color: white;
}
.scroll-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2rem var(--padding-desktop);
}
</style>
