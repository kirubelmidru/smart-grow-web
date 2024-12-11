<script>
import Logo from "$lib/components/banner/Logo.svelte";
import Sidebar from "$lib/components/navbar/Sidebar.svelte";
import Hamburger from "$lib/components/buttons/Hamburger.svelte";
import { open } from "$lib/stores/stores.js";

export let y;
export let hide;
</script>

<header class:hide>
    <Logo y={y}/>
    <Hamburger/>
</header>
{#if $open}
    <Sidebar/>
{/if}

<style>
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    padding: 0 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    @media only screen and (max-width: 960px) {
	padding: 0 0 0 var(--padding-mobile);	
    }
}
.hide {
    opacity: 0;
}
</style>
