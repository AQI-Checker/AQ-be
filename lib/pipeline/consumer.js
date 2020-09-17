const { locationQueue, smsQueue } = require('./queue.js');

locationQueue.process(5, `${__dirname}/location-worker.js`);
locationQueue.on('completed', job => {
  smsQueue.add(job.returnvalue);
});

smsQueue.process(5, `${__dirname}/sms-worker.js`);
