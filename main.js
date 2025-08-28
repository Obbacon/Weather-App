const myKey = "5b89ef6615d4c11a203d0556c88edad9";
// const holder = "https://api.openweathermap.org/data/2.5/weather?germany=units=metric&q=";

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".enterButton input");
const searching = document.querySelector(".enterButton button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(nameOfCity) {
    const response = await fetch(weatherUrl + nameOfCity + `&appid=${myKey}`);
    let data = await response.json();


    if(response.status == 404){
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/rain.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".invalid").style.display = "none";
    }

    console.log(data);

}

searching.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

//window.addEventListener("DOMContentLoaded", () =>  {
//    searchBox?.addEventListener('click', checkWeather(searchBox.value), false);
//});
