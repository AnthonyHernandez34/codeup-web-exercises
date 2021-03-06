"use strict";
// MAPBOX JS
mapboxgl.accessToken = APP_KEY;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/recondo/cl0wo0n0p000n14msmcdnw5sy',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

var marker = new mapboxgl.Marker({
    color: "#06d6a0",
}).setLngLat([-98.4936, 29.4241])
    .addTo(map);
// Pop up for marker
var popup = new mapboxgl.Popup()
    .setLngLat(marker.getLngLat())
    .setHTML("<h5 class=''> </h5>")
// .addTo(map);

marker.setPopup(popup);
marker.setDraggable(true);

marker.on('dragend', function () {
    var newCoords = marker.getLngLat().toArray();
    console.log(newCoords);
    $('#allWeather').empty();
    $('#currentDisplay').empty()
    weatherPanels(newCoords);
    marker.setPopup();
});

var coords = marker.getLngLat().toArray();
console.log(coords);

// WEATHER MAP JS
function weatherPanels(coordinates) {
    $.ajax("https://api.openweathermap.org/data/2.5/onecall", {
        data: {
            APPID: OPEN_WEATHER_APPID,
            lon: coordinates[0],
            lat: coordinates[1],
            units: "imperial",
            exclude: "minutely,hourly"
        }
    }).done(function (resp) {
        console.log(resp);
        var currentDay = resp.current.temp.toFixed() + '°F';
        console.log(currentDay);
        for (var i = 0; i <= 4; i++) {
            // Date sorting variables

            var today = resp.daily[i];
            var todayDate = new Date(today.dt * 1000);
            var shortDayName = todayDate.toLocaleString('en-us', {weekday: 'long'});
            var shortMonth = todayDate.toLocaleString('en-us', {month: 'long'});
            var shortDayNum = todayDate.toLocaleString('en-us', {day: 'numeric'});
            var shortYear = todayDate.toLocaleString("en-US", {year: "numeric"})
            var organizedDate = shortDayName + "<br>" + shortMonth + " " + shortDayNum + " " + shortYear;

            // Rest of variables
            var todayOverallTemp = today.temp;
            var currentTemp = todayOverallTemp.day.toFixed() + "°F";
            var maxTemp = todayOverallTemp.max.toFixed() + "°F";
            var minTemp = todayOverallTemp.min.toFixed() + "°F";
            var todayDescription = today.weather[0].description;
            var humidity = today.humidity + "%";
            var feelsLike = today.feels_like;
            var feelsLikeTemp = feelsLike.day.toFixed() + "°F";
            var bothMaxMin = "Max: " + maxTemp + "<br>" + " Min: " + minTemp

// Card weather update
            function renderWeather() {
                $('#allWeather').append(
                    '<div class="card col-2 grow" id="cardContainer">'
                    + '<div class="weatherIcon"></div>'
                    + '<div class=""><div class="card-body"><h5 class="card-title date" id="date">' + organizedDate
                    + '</h5><p class="card-text description align" id="description">'
                    + todayDescription + '</p></div>'
                    + '<ul class="list-group list-group-flush">'
                    + '<li class="list-group-item temperature">' + currentTemp + '</li>'
                    + '<li class="list-group-item maxAndMin">' + bothMaxMin + '</li>'
                    + '<li class="list-group-item humidity">' + "humidity: " + humidity + '</li>'
                    + '<li class="list-group-item feelsLike">' + "Feels Like: " + feelsLikeTemp + '</li>'
                    + '</ul>'
                    + '</div>'
                    + '</div>'
                );
            }

            renderWeather();
        }
// H2 Number for temp in area
        function renderCurrent() {
            // var input = $('#searchInput').val();
            $('#currentDisplay').append(
                '<div class="col-10 currently" id="subHeader">' + '<h3 id="location"> Currently:</h3>' + '<div class="content">' + '<h2 id="numberTemp">' + currentDay + '</h2>'
                + '<h2 id="second">' + currentDay + '</h2>' + '</div>'
            );

            var splitTemp = currentDay.split("°");
            var numberOnly = splitTemp[0];
            if (Number(numberOnly) >= 80) {
                $('#numberTemp').css('-webkit-text-stroke', '3px #FF7F50');
                $('#second').css('color', '#FF7F50');
            }
            if (Number(numberOnly) <= 60) {
                $('#numberTemp').css('-webkit-text-stroke', '3px #c1d3fe');
                $('#second').css('color', '#c1d3fe');
            }
        }

        renderCurrent();

    });
}

weatherPanels(coords);

// GEOCODE JS
function searchLocation() {
    var input = $('#searchInput').val();
    $('#allWeather').empty();
    geocode(input, MapBox_KEY).then(function (searchCoords) {
        // console.log(searchCoords);
        $('#currentDisplay').empty();
        marker.setLngLat(searchCoords);
        weatherPanels(searchCoords);
        map.flyTo({
            center: searchCoords,
            zoom: 9,
            speed: 2.5,
            curve: 1,
            easing(t) {
                return t;
            }
        });
    });
}

$('#searchButton').click(searchLocation);