<script>
import inView from "$lib/scripts/inView.js";
import {fade} from "svelte/transition";

let animated = false;
</script>

<div use:inView={{threshold: 0.6}}
    on:enter={() => animated = true}
    class="features-wrapper">
    {#if animated}
	<p transition:fade={{duration: 300}}>
	    We're a small group that want to revolutionize how we grow and take care of our plants encouraging sustainable behavior.
	</p>
    {/if}
</div>

<style>
.features-wrapper {
    background: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem var(--padding-desktop);

    @media only screen and (max-width: 960px) {
	padding: var(--padding-mobile);
    }
}
.features-wrapper p {
    max-width: 512px;
    font-size: 26px;
}
</style>
