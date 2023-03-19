<template>
  <section class="section">
    <h1><span class="color">404 Error!! </span> <br /> Broken link or invalid URL</h1>
    <p>The page you are looking for does not exist. It might havebeen deleted, moved or changed URL.
    </p>
      <button class="submit-button"><router-link to="/counter">Return</router-link></button>
  </section>
</template>

<style>
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 100%;
    padding: 2rem;
    margin: 0 auto;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('../assets/bg.gif');
    font-family: Arial, sans-serif;
  }

  .color {
    color: purple;
  }

  h1 {
    font-size: 5rem;
    margin: 0;
    color: #999;
    font-weight: bold;
  }

  p {
    font-size: 1.6rem;
    color: #999;
  }

  .submit-button {
    width: 10rem;
    padding: 1rem;
    outline: none;
    border: none;
    border-radius: 5px;
    background: purple;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    margin-top: 2rem;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: white;
    color: purple;
  }

</style>
