<script>
import Footer from "$lib/components/Footer.svelte";
import { fade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import "../app.css";

let y;
let view = false;
</script>

<div data-sveltekit-reload>
    <main>
	<slot/>
    </main>
    <Footer bind:view/>
</div>

<svelte:window bind:scrollY={y}/>
