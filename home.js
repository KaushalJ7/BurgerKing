const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mydark')  
}
window.onload = loadCoupon()


function loadCoupon(){
document.getElementById('coupon').style.visibility = 'visible';
document.getElementById('coupon').style.opacity='0.8';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('coupon').style.opacity='0.9';
}  
 

// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
let kelvin = 273;

    window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;

        // API ID
        let api ="6d055e39ee237af35ca066f35474e9df";

        // API URL
        let base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

        // Calling the API
        fetch(base)
            .then((response) => {
            return response.json();
            })
            .then((data) => {
            console.log(data);
            temperature.textContent = 
                Math.floor(data.main.temp - kelvin) + "°C";
            summary.textContent = data.weather[0].description;
            loc.textContent = data.name + "," + data.sys.country;
            let icon1 = data.weather[0].icon;
            icon.innerHTML = `<img src="https://i.ibb.co/sgqxpqP/weather.gif" style= 'height:50px'/>`;
            });
        });
    }
    });
          
            
     


