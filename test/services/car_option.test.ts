import assert from 'assert';
import app from '../../src/app';

describe('\'car_option\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-option');

    assert.ok(service, 'Registered the service');
  });
});
