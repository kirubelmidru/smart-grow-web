<script>
import { FireFunc } from '$lib/firebase/firebase';
import { goto } from '$app/navigation';
const { loginFunction } = FireFunc;
import loginStore from '$lib/stores/loginStore.js';

let wrong = false;

let formData = {};
const handleLogin = async () => {
    let { username, password } = formData;
    if (!username || !password) {
	wrong = true;
	return;
    }
    const loggedIn = await loginFunction(username, password);
    if (loggedIn) {
	goto('/dashboard');
	loginStore.set(true);
	wrong = false;
    } else {
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
	id="username"
	name="username"
	placeholder="Username"
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
