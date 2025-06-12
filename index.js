const API_KEY = "ff8b92723488229eae76afde015cc54e";
let debounceTimer;
let lastSearchTime = 0;

// Updated element IDs
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchButton");
const weatherInfo = document.getElementById("weatherData");
const forecastBtn = document.getElementById("forecastButton");

function debounce(fn, delay) {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, delay) {
  return function (...args) {
    const now = Date.now();
    if (now - lastSearchTime >= delay) {
      lastSearchTime = now;
      fn(...args);
    }
  };
}

function fetchWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        const { name, main, weather, wind } = data;
        weatherInfo.innerHTML = `
          <h2>${name}</h2>
          <p>Temp: ${main.temp} °C</p>
          <p>${weather[0].description}</p>
          <p>Humidity: ${main.humidity}%</p>
          <p>Wind: ${wind.speed} m/s</p>
          <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather icon">
        `;
        localStorage.setItem("city", city);
      } else {
        weatherInfo.innerHTML = `<p>City not found.</p>`;
      }
    })
    .catch((err) => {
      weatherInfo.innerHTML = `<p>Error fetching data</p>`;
      console.error(err);
    });
}

const throttledSearch = throttle(() => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
}, 2000);

cityInput.addEventListener(
  "input",
  debounce(() => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
  }, 500)
);

searchBtn.addEventListener("click", throttledSearch);

forecastBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) window.location.href = `next-days.html?city=${city}`;
});
