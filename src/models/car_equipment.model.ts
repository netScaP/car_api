// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const carEquipment = sequelizeClient.define(
    'car_equipment',
    {
      id_car_equipment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_create: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      date_update: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      id_car_modification: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price_min: {
        type: DataTypes.INTEGER,
      },
      id_car_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
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
  (carEquipment as any).associate = (models: any): void => {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return carEquipment;
}
