import { disablePagination } from 'feathers-hooks-common';
import search from '../../hooks/search';

export default {
  before: {
    all: [],
    find: [disablePagination(), search({ fields: ['name'] })],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
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
