<script>
import LinkButton from "$lib/components/buttons/LinkButton.svelte";
import NavLink from "$lib/components/articles/NavLink.svelte";
import inView from "$lib/scripts/inView.js";
import { fly } from 'svelte/transition';
import { quadOut } from 'svelte/easing';

let info = [ 
    {text:"what", component: [
	{text: "Explore", url: "/explore"},
	{text: "Features", url: "/features"},
	{text: "Impact", url: "/impact"},
    ]},
    {text: "who", component: [
	{text: "About", url: "/about"},
	{text: "Team", url: "/team"},
	{text: "Career", url: "/career"},
    ]},
    {text: "where", component: [
	{text: "Location", url: "/location"},
	{text: "Contact", url: "/contact"},
    ]},
    {text: "socials", component: [
	{text: "Linkedin", url: ""},
	{text: "Facebook", url: ""},
	{text: "Instagram", url: ""},
	{text: "X(Twitter)", url: ""},
    ]},
];

export let view;
</script>

<footer use:inView = {{ threshold: 0.6 }} on:enter = {()=> view = true} on:exit = {()=> view = false}> 
    <p style="font-size: 32px; font-weight: 600; text-transform: uppercase;">Grow</p>
    <div class="info-wrapper">
	{#each info as info}
	    <NavLink  text={info.text} component={info.component} animated={view}/>
	{/each}
    </div>
    <div class="bottom">
	{#if view}
	    <p in:fly={{ delay: 600, duration: 600, y: 20, opacity: 0, easing: quadOut }} style="display: flex;">Copyright © 2024 Guzo</p>
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
.bottom {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
</style>
