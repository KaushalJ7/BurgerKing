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
let x = document.getElementById('out');
            let y = document.getElementById('weather');

            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText = "Geo Not Supported"
                }
            }

            function showPosition(data){
                console.log(data);
                let lat = data.coords.latitude;
                let long = data.coords.longitude;
                let out = `Lat. ${lat} Long. ${long}`
                x.innerText = out
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                ///api calling
                fetch(url,{method: 'GET'})
                //return promise
                .then((res) => res.json())
                //return data
                .then((data) => {
                    console.log(data)
                    let city = data.city.name
                    let temp = data.list[0].temp.day
                    y.innerText = `City ${city} Temp. ${temp} °C`
                })
            }
            
            
     


