// Initializes the `car_mark` service on path `/car-mark`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarMark } from './car_mark.class';
import createModel from '../../models/car_mark.model';
import hooks from './car_mark.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-mark': CarMark & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/car-mark', new CarMark(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-mark');

  service.hooks(hooks);
}
