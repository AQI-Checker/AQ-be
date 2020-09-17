const sendSms = require('../utils/sms');

module.exports = job => {
  const { phone, airQuality } = job.data;
  return sendSms(
    phone, 
    airQuality
  );
  
};
