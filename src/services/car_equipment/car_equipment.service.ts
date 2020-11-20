// Initializes the `car_equipment` service on path `/car-equipment`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { CarEquipment } from './car_equipment.class';
import createModel from '../../models/car_equipment.model';
import hooks from './car_equipment.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'car-equipment': CarEquipment & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    id: 'id_car_equipment',
  };

  // Initialize our service with any options it requires
  app.use('/car-equipment', new CarEquipment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('car-equipment');

  service.hooks(hooks);
}
