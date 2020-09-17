const request = require('superagent');

const getUserSearch = async(city, state, country) => {
  const response = await request.get(`https://api.weatherbit.io/v2.0/current?key=${process.env.WEATHER_BIT_API_KEY}&city=${city}&state=${state}&country=${country}`);
  
  return response.body.data[0].aqi;
};

module.exports = getUserSearch;

