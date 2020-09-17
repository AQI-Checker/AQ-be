const request = require('supertest');
const app = require('../lib/app');
const { locationQueue, smsQueue } = require('../lib/pipeline/queue');

describe('AQ email routes', () => {
  afterAll(() => {
    return locationQueue.close() && smsQueue.close();
    
  });
  it('POST route that takes a user location and phone number', async() => {
    const response = await request(app)
      .post('/api/v1/air-quality')
      .send({
        userPhoneNumber:'240-858-5858',
        userLocation: 'Portland, Oregon, US'
      });

    expect(response.body).toEqual({
      jobId: expect.any(String),
      userPhoneNumber:'240-858-5858',
      userLocation: 'Portland, Oregon, US'
    });
  });
});
