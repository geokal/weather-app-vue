<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="weatherData">
    <h2>Current Weather in {{ weatherData.name }}</h2>
    <p>Temperature: {{ weatherData.main.temp }}°C</p>
    <p>Weather: {{ weatherData.weather[0].main }}</p>
  </div>
  <div v-else>
    <p>No weather data available.</p>
  </div>
</template>

<script>
export default {
  computed: {
    weatherData() {
      return this.$store.getters.weatherData;
    },
  },
  created() {
    // Fetch weather data for a default city or implement city selection logic
    this.$store.dispatch('fetchWeatherData', 'London');
  },
};
</script>