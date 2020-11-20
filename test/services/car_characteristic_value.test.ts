import assert from 'assert';
import app from '../../src/app';

describe('\'car_characteristic_value\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-characteristic-value');

    assert.ok(service, 'Registered the service');
  });
});
