import assert from 'assert';
import app from '../../src/app';

describe('\'car_modification\' service', () => {
  it('registered the service', () => {
    const service = app.service('car-modification');

    assert.ok(service, 'Registered the service');
  });
});
