import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { CoreModule } from 'src/core/core.module';
import { RestaurantDao } from 'src/core/dao/restaurant.dao';

@Module({
  imports:[CoreModule],
  controllers: [RestaurantController],
  providers: [RestaurantService,RestaurantDao]
})
export class RestaurantModule {}
