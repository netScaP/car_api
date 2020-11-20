// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const carCharacteristicValue = sequelizeClient.define(
    'car_characteristic_value',
    {
      id_car_characteristic_value: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: DataTypes.STRING,
      },
      unit: {
        type: DataTypes.STRING,
      },
      id_car_characteristic: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_car_modification: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date_create: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      date_update: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      id_car_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (carCharacteristicValue as any).associate = (models: any): void => {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return carCharacteristicValue;
}
