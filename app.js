// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const weatherApi = {
    key: "45eb4588e83e8199f9bc75d0826a9b76",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}


//get text from text field by enter press
const inputBox = document.getElementById('input_box');
inputBox.addEventListener('keypress',(event)=> {
    if(event.keyCode == 13) 
    {
        console.log(inputBox.value);
        getWeatherReport(inputBox.value);
    }
   
});

//get weather details
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather) {
    console.log(weather)
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let tempdata = document.getElementById('temp');
    tempdata.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minmax = document.getElementById('min_max');
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min) / ${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

    let weatherStatus = document.getElementById('status');
    weatherStatus.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let today = new Date();
    date.innerText = dateget(today);

    let time = document.getElementById('time');
    time.innerText = timeget(today);

    if(weatherStatus.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('img/clear.jpg')";
    }
    else if(weatherStatus.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('img/cloud.jpg')";
    }
    else if(weatherStatus.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('img/haze.jpg')";
    }
    else if(weatherStatus.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('img/snoww.jpg')";
    }
    else if(weatherStatus.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('img/sunny.jpg')";
    }
    else if(weatherStatus.textContent == 'Thunder') {
        document.body.style.backgroundImage = "url('img/thunder.jpg')";
    }
    else if(weatherStatus.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('img/rainn.jpg')";
    }
    else if(weatherStatus.textContent == 'Smoke') {
        document.body.style.backgroundImage = "url('img/smoke.jpg')";
    }
    else {
        document.body.style.backgroundImage = "url('img/default.jpg')";
    }
}

function dateget(dateArg)
{
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let datee = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${day}, ${datee} ${month} ${year}`;
}

function timeget(timeArg) 
{
    var hours = timeArg.getHours();
    hours = hours+"";
    if(hours.length < 2) hours = "0"+hours;

    var minutes = timeArg.getMinutes();
    minutes = minutes+"";
    if(minutes.length < 2) minutes = "0"+minutes;

    var sec = timeArg.getSeconds();
    sec = sec+"";
    if(sec.length < 2) sec = "0"+sec;

    return `${hours}:${minutes}:${sec}`;

}