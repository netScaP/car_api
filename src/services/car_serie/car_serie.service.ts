// Initializes the `car_serie` service on path `/car-serie`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarSerie } from './car_serie.class';
import createModel from '../../models/car_serie.model';
import hooks from './car_serie.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-serie': CarSerie & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/car-serie', new CarSerie(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-serie');

  service.hooks(hooks);
}
