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
  margin: 20px;
  padding: 10px 10px;
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
    <input 
      class="input-field" 
      type="number" 
      v-model="keyAmount" 
      placeholder="amount of keys"
      @input="onInput">
    <button @click="randomizeKeys">Randomize keys</button>
    <KeyContainer :keys="keys" />
    <button @click="startGame">
      Go
    </button>
  </div>
</template>

<script setup>
import KeyContainer from "./components/KeyContainer.vue";
import { computed, ref } from "vue";
let keys = ref([]);
let keyAmount = ref(null);

const possibleKeys = ["A", "S", "D", "E", "W", "Q"];

const onInput = () => {
  if (keyAmount.value > 9) keyAmount.value = 9; 
  randomizeKeys();
}

const randomizeKeys = () => {
  const keyDiv = [];
  for (let i = 0; i < keyAmount.value; i++) {
    const keyObject = {
      status: ""
    }
    keyObject.key = possibleKeys[Math.floor(Math.random() * (possibleKeys.length - 1))];
    keyDiv.push(keyObject);
  }
  keys.value = keyDiv;
}

const startGame = () => {
  
}

</script>

