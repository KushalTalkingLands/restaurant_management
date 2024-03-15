import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { CoreModule } from 'src/core/core.module';
import { RestaurantDao } from 'src/core/dao/restaurant.dao';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[CoreModule,
    JwtModule.register({
      global: true,
      secret: "This is a test secret key",
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService,RestaurantDao]
})
export class RestaurantModule {}
