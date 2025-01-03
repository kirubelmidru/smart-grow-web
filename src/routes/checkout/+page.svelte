<script>
  import { goto } from "$app/navigation";
  import { FireFunc } from "$lib/firebase/firebase.js";

  let formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    subCity: "",
  };

  let submitted = false;
  let showError = false;

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.subCity
    ) {
      showError = true;
      return;
    }

    FireFunc.addToPending(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone,
      formData.city,
      formData.subCity
    );
    submitted = true;
    showError = false;
  };
</script>

<div class="checkout-wrapper">
  <h2>Checkout</h2>

  <input bind:value={formData.firstName} type="text" placeholder="First Name" />
  <input bind:value={formData.lastName} type="text" placeholder="Last Name" />
  <input bind:value={formData.email} type="text" placeholder="Email" />
  <input bind:value={formData.phone} type="text" placeholder="Phone" />
  <input bind:value={formData.city} type="text" placeholder="City" />
  <input bind:value={formData.subCity} type="text" placeholder="Sub City" />

  <button on:click={handleSubmit}>Order</button>

  {#if showError}
    <p class="error">Please complete all the fields.</p>
  {/if}

  {#if submitted}
    <div class="popup">Order Completed</div>
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
