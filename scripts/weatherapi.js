/*global fetch*/
/*global moment*/
document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "") {
        return;
    }
    
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=2842975aa7c768ca78719e3c6814b4fa";
    fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
            
            let results = "";
            
            var weatherTemp = document.getElementsByClassName("tianqiTemp");
                for (var i = 0; i < weatherTemp.length; ++i) {
                    weatherTemp[i].innerText = json.main.temp;
                }
                
            var weatherHigh = document.getElementsByClassName("tianqiHigh");
                for (var i = 0; i < weatherHigh.length; ++i) {
                    weatherHigh[i].innerText = json.main.temp_max;
                }
                
            var weatherLow = document.getElementsByClassName("tianqiLow");
                for (var i = 0; i < weatherLow.length; ++i) {
                    weatherLow[i].innerText = json.main.temp_min;
                }
                
            var weatherHum = document.getElementsByClassName("tianqiHum");
                for (var i = 0; i < weatherHum.length; ++i) {
                    weatherHum[i].innerText = json.main.humidity;
                }
                
            var cityName = document.getElementsByClassName("currentCity");
                for (var i = 0; i < cityName.length; ++i) {
                    cityName[i].innerText = json.name;
                }
            
            /*results += "<h2>Current Weather in " + json.name + "</h2>";
            
            for (let i=0; i < json.weather.length; i++) {
	            results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            
           results += "<h2>" + json.main.temp + " &deg;F</h2>";
            results += "<span><strong>High</strong> " + json.main.temp_max + " | </span>";
            results += "<span><strong>Low</strong> " + json.main.temp_min + " | </span>";
            results += "<span><strong>Humidity</strong> " + json.main.humidity + "</span>";*/
            for (let i = 0; i < json.weather.length; i++) {
	            results += json.weather[i].description;
	            if (i !== json.weather.length - 1) {
	                results += ", ";
	                console.print(results);
	            }
            }
            
            var cityDesc = document.getElementsByClassName("tianqiDesc");
                for (var i = 0; i < cityDesc.length; ++i) {
                    cityDesc[i].innerText = results;
                }
        });
        
        const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=2842975aa7c768ca78719e3c6814b4fa";
        fetch(url2)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                let forecast = '<h2 id="forecast">5-Day, 3-Hour Forecast</h2><div class="row">';
                for (let i = 0; i < json.list.length; i++) {
                	forecast += "<div class='col-sm col-align col-sm-3'><div class='h'><h3>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h3>";
                	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
                    forecast += "<p><strong>High</strong> " + json.list[i].main.temp_max + " | ";
                    forecast += "<strong>Low</strong> " + json.list[i].main.temp_min + "</p>";
                    forecast += "<p><strong>Humidity</strong> " + json.list[i].main.humidity + "</p></div></div>";
                    
                    if (i !== 0 && (i + 1) % 4 === 0 && i !== 39) {
                        forecast += '</div><div class="row">'
                    }
                }
                  document.getElementById("forecastResults").innerHTML = forecast;
        });
    
    console.log(value);
});