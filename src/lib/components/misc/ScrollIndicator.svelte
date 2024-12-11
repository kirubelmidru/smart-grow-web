<div class="scroll">
    <p>Scroll down</p>
</div>

<style>
.scroll {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.scroll p{
    color: white;
    text-transform: uppercase;
    writing-mode: vertical-rl;
}
.scroll::after {
    content: "";
    height: 128px;
    width: 1px;
    background: white;
    animation: wave 4s cubic-bezier(0.19, 1, 0.22, 1) infinite;
}
</style>
