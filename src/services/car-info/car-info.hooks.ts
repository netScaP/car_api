import { BadRequest } from '@feathersjs/errors';
import { HookContext } from '../../app';

export default {
  before: {
    all: [],
    find: [
      async (context: HookContext): Promise<HookContext> => {
        const {
          app,
          params: { query },
        } = context;

        if (!query) {
          throw new BadRequest();
        }

        const car_type = await app.service('car-type').get(query.id_car_type);
        const commonQuery = { id_car_type: car_type.id_car_type };

        const car_mark = await app
          .service('car-mark')
          .get(query.id_car_mark, { query: commonQuery });
        const car_model = await app.service('car-model').get(query.id_car_model, {
          query: { ...commonQuery, id_car_mark: car_mark.id_car_mark },
        });
        const car_generation = await app.service('car-generation').get(query.id_car_generation, {
          query: { ...commonQuery, id_car_model: car_model.id_car_model },
        });
        const car_serie = await app.service('car-serie').get(query.id_car_serie, {
          query: {
            ...commonQuery,
            id_car_generation: car_generation.id_car_generation,
            id_car_model: car_model.id_car_model,
          },
        });
        const car_modification = await app
          .service('car-modification')
          .get(query.id_car_modification, {
            query: {
              ...commonQuery,
              id_car_serie: car_serie.id_car_serie,
              id_car_model: car_model.id_car_model,
            },
          });
        let car_equipment = undefined;
        if (query.id_car_equipment) {
          car_equipment = (<any[]>await app.service('car-equipment').find({
            query: {
              id_car_equipment: query.id_car_equipment,
              ...commonQuery,
              id_car_modification: car_modification.id_car_modification,
              $limit: 1,
            },
            paginate: false,
          }))[0];
        }

        const car_characteristic_values = await app.service('car-characteristic-value').find({
          query: {
            id_car_modification: car_modification.id_car_modification,
            id_car_type: car_type.id_car_type,
          },
          paginate: false,
        });

        context.result = {
          car_type,
          car_mark,
          car_model,
          car_generation,
          car_serie,
          car_modification,
          car_equipment,
          car_characteristic_values,
        };

        return context;
      },
    ],
  },

  after: {
    all: [],
    find: [],
  },

  error: {
    all: [],
    find: [],
  },
};
