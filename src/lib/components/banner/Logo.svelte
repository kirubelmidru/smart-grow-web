<script>
export let y;

let scrolled = false;
$: (y > 0) ? scrolled = true : scrolled = false;
</script>

<div class:scrolled class="logo-wrapper">
    <a href="/">G</a>
    <span>R</span>
    <span>O</span>
    <span>W</span>
</div>


<style>
.logo-wrapper {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    color: white;
    font-size: 32px;
    font-weight: 600;
    line-height: 28px;
    text-decoration: none;
}
.logo-wrapper a {
    color: white;
    text-decoration: none;
    transition: .3s all .6s;
}
.logo-wrapper span {
    transform: translateY(0%);
}
.logo-wrapper span:nth-child(2) {
    transition: .3s transform .2s;
}
.logo-wrapper span:nth-child(3) {
    transition: .3s transform .1s;
}
.logo-wrapper span:nth-child(4) {
    transition: .3s transform;
}
.scrolled a {
    background: var(--accent-color);
    padding: 4px;
}
.scrolled span {
    transform: translateY(-100%);
}
</style>
