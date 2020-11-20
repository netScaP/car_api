import assert from 'assert';
import app from '../../src/app';

describe('\'car_model\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-model');

    assert.ok(service, 'Registered the service');
  });
});
