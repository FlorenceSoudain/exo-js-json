function ajaxRequest()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById('name').innerHTML = obj.name;
            document.getElementById('weather').innerHTML = obj.main.temp + "°C";
            document.getElementById('max').innerHTML = "Temp. max : " + obj.main.temp_max + "°";
            document.getElementById('min').innerHTML = "Temp. min : " + obj.main.temp_min + "°";
            document.getElementById('humidity').innerHTML = "Humidité : " + obj.main.humidity + "%";
            document.getElementById('pressure').innerHTML = "Press. atmosphérique : " + obj.main.pressure;
            document.getElementById('windSpeed').innerHTML = "Vitesse du vent : " + obj.wind.speed + " km/h";
            document.getElementById('longitude').innerHTML = "Longitude : " + obj.coord.lon + " Latitude : " + obj.coord.lat;

            console.log(this.responseText);

            var month = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre",
                "novembre", "décembre");
            var date = new Date();

            document.getElementById('date').innerHTML = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

        }


    };

    xhttp.open("GET", "curl.php?city=" + document.getElementById('city').value, true);

    xhttp.send();


}

document.getElementById('btn').addEventListener('click', ajaxRequest);


