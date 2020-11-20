import assert from 'assert';
import app from '../../src/app';

describe('\'car_characteristic\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-characteristic');

    assert.ok(service, 'Registered the service');
  });
});
