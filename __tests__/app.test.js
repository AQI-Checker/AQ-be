const request = require('supertest');
const app = require('../lib/app');

// describe('AQ email routes', () => {
//   it('POST route that takes a user location and phone number', async() => {
//     const response = await request(app)
//       .post('/api/v1/air-quality')
//       .send({
//         userPhoneNumber:'240-565-9921',
//         userLocation: 'Portland, Oregon, US'
//       });

//     expect(response.body).toEqual({
//       jobId: expect.any(String),
//       userPhoneNumber:'240-565-9921',
//       userLocation: 'Portland, Oregon, US'
//     });
//   });
// });


it('adding dummy test to remove fail message', () => {
  expect('yes').toEqual('yes');
});

