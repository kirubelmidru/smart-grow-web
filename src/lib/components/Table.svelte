<script>
  import { onMount } from "svelte";
  import { FireFunc } from "$lib/firebase/firebase.js";

  export let data;
  let sortField = "";

  async function markCompleted(item) {
    await FireFunc.completeOrder(item.txnReference);
    const index = data.findIndex((i) => i.txnReference === item.txnReference);
    if (index !== -1) {
      data[index] = { ...item, completed: true };
    }
  }

  async function markIncomplete(item) {
    await FireFunc.uncompleteOrder(item.txnReference);
    const index = data.findIndex((i) => i.txnReference === item.txnReference);
    if (index !== -1) {
      data[index] = { ...item, completed: false };
    }
  }

  function sortData(field) {
    if (sortField === field) {
      data = [...data].sort((a, b) => (b[field] < a[field] ? -1 : 1));
    } else {
      data = [...data].sort((a, b) => (a[field] < b[field] ? -1 : 1));
    }
    sortField = field;
  }
</script>

<table>
  <thead>
    <tr>
      <th on:click={() => sortData("firstName")}>First Name</th>
      <th on:click={() => sortData("lastName")}>Last Name</th>
      <th>Completed</th>
      <th on:click={() => sortData("email")}>Email</th>
      <th on:click={() => sortData("phone")}>Phone</th>
      <th on:click={() => sortData("city")}>City</th>
      <th on:click={() => sortData("subCity")}>Sub City</th>
      <th on:click={() => sortData("txnReference")}>Txn Reference</th>
    </tr>
  </thead>
  <tbody>
    {#each data as item}
      <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.completed ? "Yes" : "No"}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.city}</td>
        <td>{item.subCity}</td>
        <td>{item.txnReference}</td>
        <td>
          <button
            class="btn {item.completed ? 'btn-secondary' : 'btn-primary'}"
            on:click={() => {
              if (item.completed) {
                markIncomplete(item);
              } else {
                markCompleted(item);
              }
            }}
          >
            {item.completed ? "Mark Incomplete" : "Mark Completed"}
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;

    width: 100%;

    margin: 10px;
  }

  th,
  td {
    border: 1px solid #ddd;

    padding: 8px;

    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
  th:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .btn {
    padding: 0.5rem 1rem;

    border: none;

    border-radius: 3px;

    cursor: pointer;
  }

  .btn-primary {
    background-color: #007bff;

    color: #fff;
  }

  .btn-secondary {
    background-color: #6c757d;

    color: #fff;
  }
</style>
