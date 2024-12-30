<script>
import LinkButton from "$lib/components/buttons/LinkButton.svelte";
import inView from "$lib/scripts/inView.js";
import { fly } from 'svelte/transition';
import { quadOut } from 'svelte/easing';

let what = [
    {text: "Features", url: "/features"},
    {text: "Impact", url: "/impact"},
];
let who = [
    {text: "About", url: "/about"},
    {text: "Team", url: "/team"},
];
let where = [
    {text: "Location", url: "/location"},
    {text: "Shop", url: "/shop"},
];
let socials= [
    {text: "Linkedin", url: ""},
    {text: "Facebook", url: ""},
    {text: "Instagram", url: ""},
    {text: "X(Twitter)", url: ""},
];

export let view;
</script>

<footer use:inView = {{ threshold: 0.6 }} on:enter = {()=> view = true} on:exit = {()=> view = false}> 
    <p style="font-size: 32px; font-weight: 600; text-transform: uppercase;">Grow</p>
    <div class="info-wrapper">
	<div class="nav-link">
	    <p>What</p>
	    <div class="inner-nav">
		{#each what as what}
		    <LinkButton text = {what.text} url = {what.url}/>
		{/each}
	    </div>
	</div>
	<div class="nav-link">
	    <p>Who</p>
	    <div class="inner-nav">
		{#each who as who}
		    <LinkButton text = {who.text} url = {who.url}/>
		{/each}
	    </div>
	</div>
	<div class="nav-link">
	    <p>Where</p>
	    <div class="inner-nav">
		{#each where as where}
		    <LinkButton text = {where.text} url = {where.url}/>
		{/each}
	    </div>
	</div>
	<div class="nav-link">
	    <p>Socials</p>
	    <div class="inner-nav">
		{#each socials as socials}
		    <LinkButton text = {socials.text} url = {socials.url}/>
		{/each}
	    </div>
	</div>
    </div>
    <div class="bottom">
	{#if view}
	    <p in:fly={{ delay: 600, duration: 600, y: 20, opacity: 0, easing: quadOut }} style="display: flex;">Copyright © 2024 Grow</p>
	{/if}
    </div>
</footer>

<style>
footer {
    height: 100vh;
    padding: 2rem var(--padding-desktop); 
    background: var(--accent-color);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 960px) {
	padding: var(--padding-mobile);  
    }
}
.info-wrapper {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media only screen and (max-width: 960px) {
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 2rem;
    }
}
.nav-link {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
} 
.nav-link p {
    display: flex;
    font-size: 12px;
    text-transform: uppercase;
}
.inner-nav {
    display: flex;
    flex-direction: column;
}
.bottom {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
</style>
