// Initializes the `car_modification` service on path `/car-modification`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarModification } from './car_modification.class';
import createModel from '../../models/car_modification.model';
import hooks from './car_modification.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-modification': CarModification & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    id: 'id_car_modification',
  };

  // Initialize our service with any options it requires
  app.use('/car-modification', new CarModification(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-modification');

  service.hooks(hooks);
}
