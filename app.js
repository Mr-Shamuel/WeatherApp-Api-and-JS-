function searchbtn() {
    const inputValue = document.getElementById('search-input').value;
    getDetails(inputValue);

}
const apiKey = '5c86fb7dd8580fa74c024a4f97218f3a';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather';

function getDetails(city) {
    const url = `${apiurl}?q=${city}&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // // city name 
            // const cityName = data.name;
            // document.getElementById('city-name').innerText = cityName || " Unknown City Location!!";


            // // current weather 
            // const currentWeather = data.main.temp;
            // document.getElementById('current_temperature').innerText = currentWeather;

            // // current weather status 
            // const weatherStatus = data.weather[0].main;
            // document.getElementById('weather_info').innerText = weatherStatus;

            // // set icon 
            // const setIcon = data.weather[0].icon;
            // const iconUrl = `http://openweathermap.org/img/wn/${setIcon}@2x.png`
            // document.getElementById('icon').setAttribute('src', iconUrl);

            // // empty search field
            // document.getElementById('search-input').value = " ";



            // pop up 
            function popup() {
                swal({

                    title: "Opps !!!",
                    text: 'Unknown City Location !',
                    icon: "warning",
                    // button: "Okay",
                    buttons: ["Cancel", "Ok"],
                });
            }


            // city name 
            const cityName = data.name;
            document.getElementById('city-name').innerText = cityName;
            if (city = !cityName) {
                popup();
                document.getElementById('city-name').innerText = " Unknown City Location!!";



            }

            // current weather 
            const currentWeather = data.main.temp;
            document.getElementById('current_temperature').innerText = currentWeather;

            // current weather status 
            const weatherStatus = data.weather[0].main;
            document.getElementById('weather_info').innerText = weatherStatus;

            // set icon 
            const setIcon = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${setIcon}@2x.png`
            document.getElementById('icon').setAttribute('src', iconUrl);

            // empty search field
            document.getElementById('search-input').value = " ";


        })
}

// default displaying
getDetails("Rajbari");