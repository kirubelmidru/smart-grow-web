<script>
import { goto } from '$app/navigation';
import { FireFunc } from "$lib/firebase/firebase.js";
let wrong = false;
let submitted = false;
let tx_ref = `tx-${Date.now()}`;
let firstName;
let lastName;
let email;
let phone;
let city;
let subCity;
let amount = 100;
let currency = 'ETB';
let return_url = 'http://localhost:5173/success';

const initiatePayment = async () => {
    try {
	FireFunc.addToPending(tx_ref, firstName, lastName, email, phone, city, subCity);
	const response = await fetch('/api/payment', {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify({ email, amount, currency, tx_ref, return_url }),
	});

	const result = await response.json();
	if (result.data && result.data.checkout_url) {
	    window.location.href = result.data.checkout_url;
	} else {
	    alert('Failed to initiate payment');
	}
    } catch (error) {
	console.error('Payment initiation error:', error);
	alert('An error occurred during payment initiation');
    }
};

function pay() {
    FireFunc.addToPending(tx_ref, firstName, lastName, email, phone, city, subCity);
    sumitted = true;
}
</script>

<div class="checkout-wrapper">
    <h2 style="font-size: 48px;">Checkout</h2>
    <input
	bind:value={firstName}
	type="text"
	name="firstName"
	id="firstName"
	autocomplete="off"
	placeholder="First Name"
    />
    <input
	bind:value={lastName}
	type="text"
	name="lastName"
	id="lastName"
	autocomplete="off"
	placeholder="Last Name"
    />
    <input
	bind:value={email}
	type="text"
	name="email"
	id="email"
	autocomplete="off"
	placeholder="Email"
    />
    <input
	bind:value={phone}
	type="text"
	name="phone"
	id="phone"
	placeholder="Phone"
    />
    <input
	bind:value={city}
	type="text"
	name="city"
	id="city"
	placeholder="City"
    />
    <input
	bind:value={subCity}
	type="text"
	name="subCity"
	id="subCity"
	placeholder="Sub City"
    />

    <button on:click={pay}>
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
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.popup {
    border-radius: 1rem;
    padding: 1rem;
    background: green;
    color: white;
}
</style>
