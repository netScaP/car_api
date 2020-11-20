// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const carMark = sequelizeClient.define(
    'car_mark',
    {
      id_car_mark: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
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
      name_rus: {
        type: DataTypes.STRING,
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
  (carMark as any).associate = (models: any): void => {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return carMark;
}
