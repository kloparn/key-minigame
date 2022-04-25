<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

/* hide arrows
 Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

.input-field {
  margin-top: 35%;
  font-size: 2rem;
  text-align: center;
  border: black;
  -webkit-appearance: none; 
}

button {
  margin-left: 20px;
  padding: 10px 0 10px;
  font-size: 2rem;
  background-color: transparent;
  color: white;
  border-color: black;
  border-radius: 10%;
}
button:hover {
  color: red;
  cursor: pointer;
}

</style>

<template>
  <div>
    <GenerateKeys :amount="amount" />
    <input 
      class="input-field" 
      type="number" 
      v-model="amount" 
      placeholder="amount of keys">
    <button v-on:click="randomizeKeys()">Randomize keys</button>
  </div>
</template>

<script setup>
import GenerateKeys from "./components/GenerateKeys.vue";
import { ref } from "vue";
let amount = ref(null);

const randomizeKeys = () => {
  const tempHolder = amount.value;
  amount.value = 0;;
  // To make the component actually update
  // we set a 1ms timeout to force a re-render
  setTimeout(() => { 
    amount.value = tempHolder;
  }, 1);
};

</script>

