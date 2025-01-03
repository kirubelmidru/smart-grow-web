<script>
  export let message = "Payment Successful!";
</script>

<div class="success-wrapper">
  <span>✓</span>
  <span class="success-message">{message}</span>
</div>

<style>
  .success-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--accent-color);
  }

  .success-wrapper span {
    color: white;
    font-size: 4rem;
    margin-bottom: 20px;
  }

  .success-message {
    color: white;
    font-size: 1.2rem;
    text-align: center;
  }
</style>
