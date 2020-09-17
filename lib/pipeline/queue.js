const Queue = require('bull');

const locationQueue = new Queue('locations', {
  redis: process.env.REDIS_URL
});

const smsQueue = new Queue('sms', {
  redis: process.env.REDIS_URL
});

module.exports = {
  locationQueue, 
  smsQueue
};
