import assert from 'assert';
import app from '../../src/app';

describe('\'car_mark\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-mark');

    assert.ok(service, 'Registered the service');
  });
});
