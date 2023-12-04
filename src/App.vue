<template>
  <div id="app">
    <header>
      <h1>Weather App</h1>
    </header>
    <main>
      <Weather />
    </main>
  </div>
</template>

<script>
import Weather from './components/Weather.vue';

export default {
  components: {
    Weather,
  },
};
</script>
