const request = require('request');
 
const forecast = (latitude, longitude, callaback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cf5dc5d4f287922ae3626fb847e039bc&query=' + latitude + ',' + longitude ;
    request({url:url, json:true}, (error, response) => {
        if(error) {
            callaback('Unable to connect to weather service. Check your connection.', undefined);
        }
        else if(response.body.error) {
            callaback('Unable to find location', undefined);
        }
        else {
            callaback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + 
            response.body.current.temperature + " degrees Celsius out. It feels like "+ 
            response.body.current.feelslike + " degrees Celsius.");
        }
    })
}

module.exports = forecast;