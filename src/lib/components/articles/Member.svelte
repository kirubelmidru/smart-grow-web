<script>
export let img;
export let name;
export let job;
</script>

<div>
    <img class="post-image" src={img}/>
    <h3>{name}</h3>
    <p class="tag">{job}</p>
</div>

<style>
div {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: hidden;
    transition: gap .5s;
}
img {
    height: 32rem;
    object-fit: cover;
}
p {
    color: #0f6efc;
    text-transform: uppercase;
    letter-spacing: .2em;
}
h3 {
    color: #0f6efc;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: .2em;
}
div:hover {
    gap: 1rem;
}
</style>
