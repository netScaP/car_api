// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const carGeneration = sequelizeClient.define(
    'car_generation',
    {
      id_car_generation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_car_model: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year_begin: {
        type: DataTypes.STRING,
      },
      year_end: {
        type: DataTypes.STRING,
      },
      date_create: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      date_update: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      id_car_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
  (carGeneration as any).associate = (models: any): void => {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return carGeneration;
}
