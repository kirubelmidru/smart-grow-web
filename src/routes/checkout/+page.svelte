<script>
  import { goto } from "$app/navigation";
  import { FireFunc } from "$lib/firebase/firebase.js";

  function submitForm(event) {
    event.preventDefault();
  }
</script>

<div class="checkout-wrapper">
  <form method="post" action="?/paymentInit">
    <h2 class="checkout-title">Checkout</h2>
    <input
      type="text"
      name="firstName"
      id="firstName"
      autocomplete="off"
      placeholder="First Name"
      required
    />
    <input
      type="text"
      name="lastName"
      id="lastName"
      autocomplete="off"
      placeholder="Last Name"
      required
    />
    <input
      type="email"
      name="email"
      id="email"
      autocomplete="off"
      placeholder="Email"
      required
    />
    <input type="tel" name="phone" id="phone" placeholder="Phone" required />
    <input type="text" name="city" id="city" placeholder="City" required />
    <input type="text" name="subCity" id="subCity" placeholder="Sub City" />

    <button type="submit">Order</button>
  </form>
</div>

<style>
  :root {
    --primary-color: #0056d2;
    --secondary-color: #ffffff;
    --input-bg: #f8f9fa;
    --button-bg: #0056d2;
    --button-hover-bg: #0044a1;
    --button-text-color: white;
    --border-radius: 8px;
    --spacing: 1rem;
    --font-family: "Arial", sans-serif;
  }

  .checkout-wrapper {
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: #f2f4f6;
  }

  .checkout-title {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing);
    font-family: var(--font-family);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: var(--secondary-color);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  input {
    width: 100%;
    padding: var(--spacing);
    background: var(--input-bg);
    border: 1px solid #ced4da;
    border-radius: var(--border-radius);
    font-size: 1rem;
    outline: none;
    font-family: var(--font-family);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 4px rgba(0, 86, 210, 0.3);
  }

  button {
    padding: var(--spacing) calc(2 * var(--spacing));
    background: var(--button-bg);
    color: var(--button-text-color);
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-family: var(--font-family);
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background: var(--button-hover-bg);
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 86, 210, 0.3);
  }

  button:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    form {
      padding: 1.5rem;
    }

    .checkout-title {
      font-size: 2rem;
    }

    input,
    button {
      font-size: 0.9rem;
    }
  }
</style>
