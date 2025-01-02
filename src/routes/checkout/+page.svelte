<script>
import { goto } from '$app/navigation';
import { FireFunc } from "$lib/firebase/firebase.js";
let wrong = false;
let submitted = false;
let firstName = "";
let lastName = "";
let email = "";
let phone = "";
let city = "";
let subCity = "";

function order() {
    FireFunc.addToPending("100", firstName, lastName, email, phone, city, subCity);
    submitted = true;
}
</script>

<div class="checkout-wrapper">
    <h2 style="font-size: 48px;">Checkout</h2>
    <input
	value={firstName}
	type="text"
	autocomplete="off"
	placeholder="First Name"
    />
    <input
	value={lastName}
	type="text"
	autocomplete="off"
	placeholder="Last Name"
    />
    <input
	value={email}
	type="text"
	autocomplete="off"
	placeholder="Email"
    />
    <input
	value={phone}
	type="text"
	placeholder="Phone"
    />
    <input
	value={city}
	type="text"
	placeholder="City"
    />
    <input
	value={subCity}
	type="text"
	placeholder="Sub City"
    />

    <button
	on:click={order}
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
