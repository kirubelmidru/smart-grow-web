<script>
  import { goto } from "$app/navigation";
  import { auth } from "$lib/firebase/firebase.js";
  import { signOut } from "firebase/auth";
  import loginStore from "$lib/stores/loginStore.js";
  import { FireFunc } from "$lib/firebase/firebase.js";
  import Table from "$lib/components/Table.svelte";
  import { onMount } from "svelte";

  let data = [];

  onMount(async () => {
    const orders = await FireFunc.fetchAllOrders();
    data = orders;
  });

  async function logout() {
    await signOut(auth);
    await goto("/");
  }
</script>

<div class="dashboard-wrapper">
  <div class="top">
    <h2 style="font-size: 4rem;">Orders</h2>
    <button on:click={logout}> Logout</button>
  </div>
  <Table {data} />
</div>

<style>
  .dashboard-wrapper {
    padding: 4rem;
    display: flex;
    flex-direction: column;
  }
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
  button {
    padding: 0 4rem;
    background: black;
    color: white;
    font-size: 1.5rem;
  }
</style>
