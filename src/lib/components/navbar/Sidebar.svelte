<script>
import NavLink from "$lib/components/articles/NavLink.svelte";
import inView from "$lib/scripts/inView.js";
import { open } from "$lib/stores/stores.js";
import { slide } from 'svelte/transition';
import { quadOut } from 'svelte/easing';

let info = [
    { text: "who", component: [
	{text: "About Us", url: "/about"},
	{text: "Team", url: "/team"},
	{text: "Careers", url: "/careers"},

    ]},
    { text: "what", component: [
	{text: "Explore", url: "/explore"},
	{text: "Features", url: "/features"},
	{text: "Impact", url: "/impact"},
    ]}
];

let animated = false;
</script>

<nav use:inView = {{ threshold: 0.6 }} on:enter = {()=> animated = true} on:exit = {()=> animated = false} transition:slide={{ duration: 400, axis: 'y', easing: quadOut }}>
    {#each info as info}
	<NavLink text={info.text} component={info.component} animated={animated}/>
    {/each}
</nav>

<style>
nav {
    position: fixed;
    width: 100%;
    height: 50vh;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: flex-end;
    padding: 2rem;
    background: var(--accent-color);
    color: white;
    z-index: 50;
    @media only screen and (max-width: 960px) {
	height: 100vh;
	padding: var(--padding-mobile);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: flex-end;
	align-items: flex-start;
    }
}
</style>
