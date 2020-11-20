import assert from 'assert';
import app from '../../src/app';

describe('\'car_equipment\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-equipment');

    assert.ok(service, 'Registered the service');
  });
});
