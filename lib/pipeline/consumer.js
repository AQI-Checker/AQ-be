const { locationQueue } = require('./queue.js');

locationQueue.process(5, `${__dirname}/location-worker.js`);
