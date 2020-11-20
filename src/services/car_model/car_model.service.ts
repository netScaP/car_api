// Initializes the `car_model` service on path `/car-model`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarModel } from './car_model.class';
import createModel from '../../models/car_model.model';
import hooks from './car_model.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-model': CarModel & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    id: 'id_car_model',
  };

  // Initialize our service with any options it requires
  app.use('/car-model', new CarModel(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-model');

  service.hooks(hooks);
}
