<script>
import LinkButton from "$lib/components/buttons/LinkButton.svelte";
import inView from "$lib/scripts/inView.js";
import { open } from "$lib/stores/stores.js";
import { slide } from 'svelte/transition';
import { quadOut } from 'svelte/easing';

let who = [
    { text: "About Us", url: "/about" },
    { text: "Team", url: "/team" },
];
let what = [
    {text: "Features", url: "/features"},
    {text: "Impact", url: "/impact"},
];

let animated = false;
</script>

<nav use:inView = {{ threshold: 0.6 }} on:enter = {()=> animated = true} on:exit = {()=> animated = false} transition:slide={{ duration: 400, axis: 'y', easing: quadOut }}>
    <div class="nav-link">
	<p>Who</p>
	<div class="inner-nav">
	    {#each who as who}
		<LinkButton text = {who.text} url = {who.url}/>
	    {/each}
	</div>
    </div>
    <div class="nav-link">
	<p>What</p>
	<div class="inner-nav">
	    {#each what as what}
		<LinkButton text = {what.text} url = {what.url}/>
	    {/each}
	</div>
    </div>
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
</style>
