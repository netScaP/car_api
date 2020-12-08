import { disablePagination } from 'feathers-hooks-common';
import search from '../../hooks/search';

export default {
  before: {
    all: [],
    find: [search({ fields: ['name'] }), disablePagination()],
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
