import { Application } from '../declarations';
import carType from './car_type/car_type.service';
import carCharacteristic from './car_characteristic/car_characteristic.service';
import carMark from './car_mark/car_mark.service';
import carOption from './car_option/car_option.service';
import carModel from './car_model/car_model.service';
import carModification from './car_modification/car_modification.service';
import carSerie from './car_serie/car_serie.service';
import carCharacteristicValue from './car_characteristic_value/car_characteristic_value.service';
import carEquipment from './car_equipment/car_equipment.service';
import carGeneration from './car_generation/car_generation.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(carType);
  app.configure(carCharacteristic);
  app.configure(carMark);
  app.configure(carOption);
  app.configure(carModel);
  app.configure(carModification);
  app.configure(carSerie);
  app.configure(carCharacteristicValue);
  app.configure(carEquipment);
  app.configure(carGeneration);
}
