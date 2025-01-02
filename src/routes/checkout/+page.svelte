<script>
import { goto } from '$app/navigation';
let wrong = false;
let submitted = false;

function change() {
    submitted = true;
    goto('/');
}
</script>

<div class="checkout-wrapper">
    <h2 style="font-size: 48px;">Checkout</h2>
    <input
	type="text"
	autocomplete="off"
	id="firstName"
	name="firstName"
	placeholder="First Name"
    />
    <input
	type="text"
	autocomplete="off"
	id="lastName"
	name="lastName"
	placeholder="Last Name"
    />
    <input
	type="text"
	autocomplete="off"
	id="email"
	name="email"
	placeholder="Email"
    />
    <input
	type="text"
	id="phone"
	name="phone"
	placeholder="Phone"
    />
    <input
	type="text"
	id="city"
	name="city"
	placeholder="City"
    />
    <input
	type="text"
	id="subCity"
	name="subCity"
	placeholder="Sub City"
    />

    <button
	on:click={change()}
    >
	Order
    </button>

    {#if wrong}
	<p style="color: red;">Please Complete All the Fields</p>
    {/if}
    {#if submitted}
	<div class="popup">
	    Order Completed
	</div>
    {/if}
</div>

<style>
.checkout-wrapper {
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
input {
    width: 24rem;
    padding: 1rem;
    background: lightblue;
}
button {
    padding: 1rem 4rem;
    background: black;
    color: white;
    text-transform: uppercase;
}
.popup {
    border-radius: 1rem;
    padding: 1rem;
    background: green;
    color: white;
}
</style>
