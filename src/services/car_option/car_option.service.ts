// Initializes the `car_option` service on path `/car-option`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarOption } from './car_option.class';
import createModel from '../../models/car_option.model';
import hooks from './car_option.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-option': CarOption & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/car-option', new CarOption(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-option');

  service.hooks(hooks);
}
