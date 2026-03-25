# Weather App
A clean and responsive web application that allows users to search for a city and view both its current weather and a 5-day weather forecast.

<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/b67548f4-35ad-4675-8d9e-3e0dbd9d56d6" />
<img width="1902" height="865" alt="image" src="https://github.com/user-attachments/assets/56395eeb-4e9c-4a8c-bb18-f87e563c384c" />


## Features
- Search for any city to view its current real-time weather conditions.
- Displays comprehensive data including temperature (in °C), humidity, wind speed, and weather condition descriptions with visual icons.
- Check the **Next 5-Days Forecast** on a dedicated page (`next-days.html`).
- Optimized search input with **debounce** and **throttle** implementation to minimize API calls.
- Persists the last searched city locally using `localStorage`.
- Fully responsive design built purely with Vanilla CSS.

## Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: [OpenWeatherMap API](https://openweathermap.org/api) (Current Weather Data & 5 Day / 3 Hour Forecast)

## Deployed Link
[Live Demo](https://strong-genie-568ab0.netlify.app/)

## Setup Instructions

### Prerequisites
- A modern web browser.
- (Optional) A local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code.

### 💻 Running the App
1. **Clone the repository** or download the folder.
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Open `index.html` directly in your favorite web browser.
   - Alternatively, if using VS Code, right-click `index.html` and select **"Open with Live Server"**.

### 🔑 Setting up your own API Key (Optional)
This project uses the OpenWeatherMap API. A default key is provided in the code, but for personal or production use, you should generate your own:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/) and generate an API key.
2. Open `index.js` and replace the `API_KEY` at the top of the file:
   ```javascript
   const API_KEY = "your_actual_api_key_here";
   ```
3. Open `next-days.html` and replace the `API_KEY` in the `<script>` tag:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

## Notes
- This project intentionally does not use heavy frameworks (like React or Angular) to demonstrate strong fundamentals in DOM manipulation, asynchronous JavaScript (`fetch`), and performance optimization (debouncing/throttling).
