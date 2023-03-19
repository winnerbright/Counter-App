<template>
  <div class="counter__App">
    <h1>Score: {{ count }}</h1>
    
    <div class="input-wrapper">
      <input type="number" id="value" v-model="value"  />
      <input class='submit' type='submit' @click='setValue(value)' value='Set Value' />
    </div>
    <div class="buttons">
      <button class="button increment__btn" @click="increment">+</button>
      <button class="button decrement__btn" @click="decrement">-</button>
      <button class="button reset__btn" @click="reset">Reset</button>
    </div>
  </div>
</template>
  
  <script>
  import useCounter from '@/views/counter.js';
  
  export default {
    setup() {
      const { count, increment, decrement, reset, setValue } = useCounter();
      // let value = 0;
  
      return {
        count,
        increment,
        decrement,
        reset,
        setValue,
        value: 0,
      };
    },
  };
  </script>
  
  <style scoped>
  .counter__App {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('../assets/bg.gif');
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 5rem;
    margin: 0;
    color: white; /* white font */
  }
  
  .buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    width: 400px;
    justify-content: center;
    align-items: center;
  }
  
  .button {
    width: 30%;
    height: 50px;
    font-size: 1.4rem;
    padding: 1.2rem 2.4rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 1rem;
    transition: background-color 0.3s ease-in-out;
  }
  
  .increment__btn {
    background-color: purple; /* purple button background */
    color: white;
  }
  
  .increment__btn:hover {
    background-color: #8b008b; /* darker purple hover */
  }
  
  .decrement__btn {
    background-color: purple; /* purple button background */
    color: white;
  }
  
  .decrement__btn:hover {
    background-color: #8b008b; /* darker purple hover */
  }
  
  .reset__btn {
    background-color: #333; /* #333 button background */
    color: white;
    border: 1px solid purple;
  }
  
  .reset__btn:hover {
    background-color: #444; /* darker #333 hover */
  }
  
  .input-wrapper {
    margin-top: 2rem;
  }
  
  input[type='number'] {
    font-size: 1.6rem;
    padding: 1.4rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    width: 25rem;
    height: 50px;
  }
  
  input[type='number']:focus {
    outline: none;
    box-shadow: 0 0 1rem rgba(108, 92, 231, 0.5);
  }
  input[type='submit']{
    width: 10rem;
    border: none;
    height: 50px;
    border-radius: 0.5rem;
    outline: none;
    background: purple; /* purple button background */
    color: white;
    padding: 1.4rem;
    font-size: 1.6rem;
    margin: 2rem;
    font-weight: bolder;
  }
  input[type='submit']:hover{
    transition: all 0.4s;
    color: white;
    background-color: #8b008b; /* darker purple hover */
  }
  
</style>