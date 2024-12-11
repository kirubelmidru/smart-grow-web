<script>
import { open } from "$lib/stores/stores.js";

let enabled = false;
$:enabled = $open;
</script>

<button class:enabled on:click={()=>open.update((open) => !open)}>
    <span></span>
    <span></span>
    <span></span>
</button>

<style>
button {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 4px;
    width: 6rem;
    height: 10rem;
    background: #2c29c5;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}
button span {
    height: 2px;
    background: white;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
button span:nth-child(1) {
    width: 100%;
}
button span:nth-child(2) {
    width: 100%;
}
button span:nth-child(3) {
    width: 33.33%;
}
button:hover span:nth-child(3) {
    width: 100%;
}
.enabled {
    background: white;
}
.enabled span {
    background: #2c29c5;
}
.enabled span:nth-child(1) {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0.375rem) rotate(45deg);
}
.enabled span:nth-child(2) {
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0%;
}
.enabled span:nth-child(3) {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-0.375rem) rotate(-45deg);
    width: 100%;
}
</style>
