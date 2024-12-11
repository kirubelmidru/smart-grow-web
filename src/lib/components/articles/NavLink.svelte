<script>
import LinkButton from "$lib/components/buttons/LinkButton.svelte";
import { fly } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';

export let text;
export let component;
export let animated;
</script>

<div class="nav-link">
    {#if animated}
    <p in:fly={{ delay: 400, duration: 600, y: 20, opacity: 0, easing: quadInOut }}>{text}</p>
    {/if}
    <div>
	{#each component as component}
	    <LinkButton text={component.text} component={component.url} animated={animated}/>
	{/each}
    </div>
</div>

<style>
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
</style>
