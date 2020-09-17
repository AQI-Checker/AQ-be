const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twillPhone = process.env.TWILL_NUMBER;
const sendSms = (phone, airQuality) => {
  client.messages
    .create({
      body: `Your local air quality is ${airQuality}`,
      from: twillPhone,
      to: `${phone}`
    })
    .then(message => console.log(message.sid))
    .catch(console.log);
};

module.exports = sendSms; 
