// Initializes the `car_characteristic` service on path `/car-characteristic`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarCharacteristic } from './car_characteristic.class';
import createModel from '../../models/car_characteristic.model';
import hooks from './car_characteristic.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-characteristic': CarCharacteristic & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    id: 'id_car_characteristic',
  };

  // Initialize our service with any options it requires
  app.use('/car-characteristic', new CarCharacteristic(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-characteristic');

  service.hooks(hooks);
}
