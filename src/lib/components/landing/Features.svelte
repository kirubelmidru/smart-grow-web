<script>
import ScrollIndicator from "$lib/components/misc/ScrollIndicator.svelte";
import inView from "$lib/scripts/inView.js";
import { fly } from 'svelte/transition';
import { quadOut } from 'svelte/easing';

let animated = false;
</script>

<div class="feature-wrapper" use:inView = {{ threshold: 0.6 }} on:enter = {()=> animated = true} on:exit = {()=> animated = false}>
    <div class="feature-image"/>
    <div class="feature-content">
	{#if animated}
	    <h2 class="feature-text">
		<span in:fly={{ delay: 300, duration: 600, y: 60, opacity: 0, easing: quadOut }} >Grow your plants with</span>
		<span in:fly={{ delay: 150, duration: 600, y: 60, opacity: 0, easing: quadOut }} >sustainability and ease.</span>
	    </h2>
	    <ScrollIndicator/>
	{/if}
    </div>
</div>

<style>
.feature-wrapper {
    height: 100vh;
}
.feature-image {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url('$lib/images/hero-image.png');
    background-size: cover;
    z-index: -99;
}
.feature-content {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2rem var(--padding-desktop);
    z-index: -20;
    @media only screen and (max-width: 960px) {
	padding: var(--padding-mobile);
    }
}
.feature-text {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 96px;
    @media only screen and (max-width: 960px) {
	font-size: 42px;
    }
}
</style>
