require('dotenv').config();
const request = require('postman-request')

const secret_key_weatherstack = process.env.secret_key_weatherstack; //api access key from weather-stack

const forecast = (logitude,latitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${secret_key_weatherstack}&query=${logitude},${latitude}&units=f`; //forecastUrl

    request({url , json:true}, (error,response,body) => {
        if(error){
            callback("Unable to connect weather-service!", undefined) //low level(os level) error handling like no internet connection
        } else if(body.error){
            callback(`Unable to find location!`, undefined)
        }else{
            callback(undefined, `${body.current.weather_descriptions[0]} : It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out`)
        }
    })
}

module.exports = forecast