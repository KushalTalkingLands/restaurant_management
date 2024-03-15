import { Connection } from "mongoose";
import { dbConfig } from "src/core/config/dbConfig";
// import { UserSchema } from "src/core/schema/user.schema";
import { RestaurantSchema } from "src/core/schema/restaurant.schema";
export const restaurantModelProviders = [
    {
      provide: dbConfig.restaurantModel,
      useFactory: (connection: Connection) =>
        connection.model(dbConfig.collectionName,RestaurantSchema),
      inject: [dbConfig.dbName],
    },
];