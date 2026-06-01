const apiKey = "e360b3c3bf46959b13585089bfd53c20";

async function getWeather(){

    const city =
        document.getElementById("cityInput").value;

    const loading =
        document.getElementById("loading");

    const result =
        document.getElementById("weatherResult");

    loading.innerHTML =
        "Loading weather data...";

    result.innerHTML = "";

    try{

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        loading.innerHTML = "";

        result.innerHTML = `
            <h2>${data.name}</h2>

            <p><strong>Temperature:</strong>
            ${data.main.temp} °C</p>

            <p><strong>Weather:</strong>
            ${data.weather[0].main}</p>

            <p><strong>Humidity:</strong>
            ${data.main.humidity}%</p>

            <p><strong>Wind Speed:</strong>
            ${data.wind.speed} m/s</p>
        `;

    }
    catch(error){

        loading.innerHTML = "";

        result.innerHTML =
            `<p style="color:red;">
                ${error.message}
            </p>`;
    }
}