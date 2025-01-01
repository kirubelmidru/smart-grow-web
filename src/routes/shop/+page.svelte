<script>
import Product from "$lib/components/articles/Product.svelte";
import Smart_Plant_Grower from "$lib/images/smart_plant_grower.jpg";
</script>

<div class="shop-wrapper">
    <h2 style="font-size: 4rem;">Shop</h2>
    <div class="products">
	<Product name="Smart Plant Grower" description="An automated smart plant grower" img={Smart_Plant_Grower}/>
    </div>
</div>

<style>
.shop-wrapper {
    padding: 4rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.products {
    max-width: 1240px;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
}
@media only screen and (max-width: 1500px) {
    .products {
	max-width: 960px;
	grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media only screen and (max-width: 960px) {
    .products {
	max-width: 540px;
	grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
