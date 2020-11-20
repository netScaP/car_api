import assert from 'assert';
import app from '../../src/app';

describe('\'car_type\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-type');

    assert.ok(service, 'Registered the service');
  });
});
