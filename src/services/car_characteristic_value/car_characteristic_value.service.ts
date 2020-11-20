// Initializes the `car_characteristic_value` service on path `/car-characteristic-value`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarCharacteristicValue } from './car_characteristic_value.class';
import createModel from '../../models/car_characteristic_value.model';
import hooks from './car_characteristic_value.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-characteristic-value': CarCharacteristicValue & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/car-characteristic-value', new CarCharacteristicValue(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-characteristic-value');

  service.hooks(hooks);
}
