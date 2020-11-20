import assert from 'assert';
import app from '../../src/app';

describe('\'car_generation\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-generation');

    assert.ok(service, 'Registered the service');
  });
});
