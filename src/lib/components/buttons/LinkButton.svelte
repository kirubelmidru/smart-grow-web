<script>
import { fly } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';

export let index
export let text;
export let url;
export let animated = false;
</script>

{#if animated}
    <div in:fly={{ delay: 200, duration: 600, y: 20, opacity: 0, easing: quadInOut }} class="link-wrapper">
	<a href={url}>
	    {text}
	</a>
    </div>
{/if}

<style>
.link-wrapper {
    display: flex;
}
a {
    color: white;
    text-decoration: none;
}
a::after {
    display: block;
    content: "";
    height: 1px;
    background: white;
    transition: transform 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: right;
    transform: scaleX(0);
}
a:hover::after {
    transform-origin: left;
    transform: scaleX(1);
}
</style>
