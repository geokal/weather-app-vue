import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    weatherData: null,
  },
  mutations: {
    setWeatherData(state, data) {
      state.weatherData = data;
    },
  },
  actions: {
    async fetchWeatherData({ commit }, city) {
      try {
        const apiKey = 'ef61d027a1f013aae3caa9659b7763a4'; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        commit('setWeatherData', response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
  },
  getters: {
    weatherData: (state) => state.weatherData,
  },
});
