// Initializes the `car_generation` service on path `/car-generation`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarGeneration } from './car_generation.class';
import createModel from '../../models/car_generation.model';
import hooks from './car_generation.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-generation': CarGeneration & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    id: 'id_car_generation',
  };

  // Initialize our service with any options it requires
  app.use('/car-generation', new CarGeneration(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-generation');

  service.hooks(hooks);
}
