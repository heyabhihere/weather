const API_KEY = `56a1eed88f24468a7edc498348895931`;
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

// selectors
const form = document.querySelector("form");
const searcharea = document.getElementById("search-city");
const weather = document.querySelector(".detail-area");

const getweather = async (city)=>{
    weather.innerHTML = ` <div id="spinner"></div>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const responsedata = await response.json();
    console.log(responsedata);
    return showweather(responsedata);
}
const showweather = (data)=>{
    if(data.cod == 404){
        weather.innerHTML = `<h2>City Not Found</h2>`;
    }
    const imagePath = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weather.innerHTML = `
    <div class="row">
        <img src="${imagePath}" alt="wetaher-image">
    </div>
        <div class="row">
                <div class="temp">${data.main.temp}  \u00B0 C</div>
                <div class="City">${data.name}</div>
        </div>
    `;
}
form.addEventListener("submit",(e)=>{
    getweather(searcharea.value);
    e.preventDefault();
})

var dt = new Date();
document.getElementById('date-time').innerHTML = dt;