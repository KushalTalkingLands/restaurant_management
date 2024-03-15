import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { RestaurantDao } from 'src/core/dao/restaurant.dao';
import { CreateRestaurantDto } from 'src/core/dto/restaurant.dto';
import { Restaurant } from 'src/core/interface/restaurant.interface';
import { LoggerConstant } from 'src/core/constants/loggerConstant';

@Injectable()
export class RestaurantService {
    private readonly logger = new Logger(RestaurantService.name);

    constructor(private readonly restaurantDao: RestaurantDao) {}

    async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        this.logger.log(LoggerConstant.CreateRestaurantService);
        try {
            const restaurant = await this.restaurantDao.create(createRestaurantDto);
            this.logger.log(LoggerConstant.createRestaurantDoneService);
            return restaurant;
        } catch (error) {
            this.logger.error(LoggerConstant.createRestaurantErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll(): Promise<Restaurant[]> {
        try {
            this.logger.log(LoggerConstant.getRestaurantsService);
            const restaurants = await this.restaurantDao.findAll();
            this.logger.log(LoggerConstant.getRestaurantsDoneService);
            return restaurants;
        } catch (error) {
            this.logger.error(LoggerConstant.getRestaurantsErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findById(id: string): Promise<Restaurant> {
        try {
            this.logger.log(LoggerConstant.getOneRestaurantsService);
            const restaurant = await this.restaurantDao.findById(id);
            this.logger.log(LoggerConstant.getOneRestaurantsDoneService);
            return restaurant;
        } catch (error) {
            this.logger.error(LoggerConstant.getOneRestaurantsErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: string, createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        try {
            this.logger.log(LoggerConstant.updateOneRestaurantsService);
            const updatedRestaurant = await this.restaurantDao.update(id, createRestaurantDto);
            this.logger.log(LoggerConstant.updateOneRestaurantsService);
            return updatedRestaurant;
        } catch (error) {
            this.logger.error(LoggerConstant.updateOneRestaurantsErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<Restaurant> {
        try {
            this.logger.log(LoggerConstant.deleteRestaurantsService);
            const deletedRestaurant = await this.restaurantDao.delete(id);
            this.logger.log(LoggerConstant.deleteRestaurantsDoneService);
            return deletedRestaurant;
        } catch (error) {
            this.logger.error(LoggerConstant.deleteRestaurantsErrorService);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}

