<script>
  import { goto } from "$app/navigation";
  import { FireFunc } from "$lib/firebase/firebase.js";

  function submitForm(event) {
    event.preventDefault();
  }
</script>

<div class="checkout-wrapper">
  <form method="post" action="?/paymentInit">
    <h2 style="font-size: 48px;">Checkout</h2>
    <input
      type="text"
      name="firstName"
      id="firstName"
      autocomplete="off"
      placeholder="First Name"
    />
    <input
      type="text"
      name="lastName"
      id="lastName"
      autocomplete="off"
      placeholder="Last Name"
    />
    <input
      type="text"
      name="email"
      id="email"
      autocomplete="off"
      placeholder="Email"
    />
    <input type="text" name="phone" id="phone" placeholder="Phone" />
    <input type="text" name="city" id="city" placeholder="City" />
    <input type="text" name="subCity" id="subCity" placeholder="Sub City" />

    <button type="submit"> Order </button>
  </form>
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
