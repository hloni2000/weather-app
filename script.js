

async function getWeather() {

    const apiKey = 'dbd6553757504b7da4a845c401c2c503';
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

    try {

      const response = await fetch(url);
      const data = await response.json();
      
      document.getElementById('city-name').innerText = `Weather in ${data.name}`;
      document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
      document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
      document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    } 
    

    catch (error) {

       console.error("Error fetching the weather data", error);
       alert("City not found or error with the API.");
    }
}


function updateLiveDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const dateString = now.toLocaleDateString('en-US', options);

  document.getElementById('live-date').textContent = dateString;
}

// Update the date immediately
updateLiveDate();

// Optionally, update the date every second
setInterval(updateLiveDate, 1000);


  