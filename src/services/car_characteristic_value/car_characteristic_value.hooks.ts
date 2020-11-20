import { alterItems } from 'feathers-hooks-common';
import { HookContext } from '../../app';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [alterItems(getValue as any)],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};

async function getValue(r: { [key: string]: any }, context: HookContext) {
  const { app } = context;
  const record = r && r.dataValues ? r.dataValues : r;

  if (!record || !record.id_car_characteristic) {
    return r;
  }

  const car_characteristic = (<any[]>await app.service('car-characteristic').find({
    query: {
      id_car_characteristic: record.id_car_characteristic,
      $limit: 1,
    },
    paginate: false,
  }))[0];

  if (car_characteristic) {
    record.name = car_characteristic.name;
  }

  return r;
}
