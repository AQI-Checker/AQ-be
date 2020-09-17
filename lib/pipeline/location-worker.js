const getUserSearch = require('../utils/getUserSearch');

module.exports = async(job) => {
  const { phoneNumber, city, state, country } = job.data;
  const aqi = await getUserSearch(city, state, country);

  return {
    phone: phoneNumber,
    airQuality: aqi
  };
};

