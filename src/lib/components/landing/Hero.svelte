<script>
import LinkButton from "$lib/components/buttons/LinkButton.svelte";
import ScrollIndicator from "$lib/components/misc/ScrollIndicator.svelte";
import inView from "$lib/scripts/inView.js";
import { fly } from 'svelte/transition';
import { quadOut } from 'svelte/easing';

let animated = false;
</script>

<div class="hero-wrapper" use:inView = {{ threshold: 0.6 }} on:enter = {()=> animated = true} on:exit = {()=> animated = false}>
    <div class="hero-image"/>
    <div class="hero-content">
	{#if animated}
	    <h2 class="hero-text">
		<span in:fly={{ delay: 300, duration: 600, y: 60, opacity: 0, easing: quadOut }} >Grow your plants with</span>
		<span in:fly={{ delay: 150, duration: 600, y: 60, opacity: 0, easing: quadOut }} >sustainability and ease.</span>
	    </h2>
	    <ScrollIndicator/>
	{/if}
    </div>
</div>

<style>
.hero-wrapper {
    height: 100vh;
}
.hero-image {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url('$lib/images/hero-image.png');
    background-size: cover;
    z-index: -99;
}
.hero-content {
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
.hero-text {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 96px;
    @media only screen and (max-width: 960px) {
	font-size: 42px;
    }
}
</style>
