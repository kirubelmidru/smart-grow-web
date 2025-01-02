<script>
import { goto } from '$app/navigation';
import { auth } from "$lib/firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import loginStore from '$lib/stores/loginStore.js';

let wrong = false;

let formData = {};

const handleLogin = async () => {
    let { email, password } = formData;
    try {
	const userCredential = await signInWithEmailAndPassword(auth, email, password);
	let user = userCredential.user;
	wrong = false;
	goto('/dashboard');
	loginStore.set(true);
    } catch (error) {
	console.error("Error logging in:", error.message);
	wrong = true;
    }
};

const handleChange = (e) => {
    formData = {
	...formData,
	[e.target.name]: e.target.value
    };
};

</script>

<div class="login-wrapper">
    <h2 style="font-size: 48px;">Login</h2>
    <input
	on:input={handleChange}
	type="text"
	autocomplete="off"
	id="email"
	name="email"
	placeholder="Email"
    />
    <input
	on:input={handleChange}
	type="password"
	id="password"
	name="password"
	placeholder="Password"
    />
    <button on:click={handleLogin}>
	Login
    </button>
    
    {#if wrong}
	<p style="color: red;">Wrong Username or password</p>
    {/if}

</div>

<style>
.login-wrapper {
    margin: auto;
    height: 100vh;
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
</style>
