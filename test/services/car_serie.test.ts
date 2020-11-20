import assert from 'assert';
import app from '../../src/app';

describe('\'car_serie\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-serie');

    assert.ok(service, 'Registered the service');
  });
});
