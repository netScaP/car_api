// Initializes the `car_type` service on path `/car-type`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarType } from './car_type.class';
import createModel from '../../models/car_type.model';
import hooks from './car_type.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-type': CarType & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/car-type', new CarType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-type');

  service.hooks(hooks);
}
