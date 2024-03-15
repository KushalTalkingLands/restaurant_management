import { HttpException, HttpStatus, Inject, Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateRestaurantDto } from "../dto/restaurant.dto";
import { Restaurant } from "../interface/restaurant.interface";
import { LoggerConstant } from "../constants/loggerConstant";
import { dbConfig } from "../config/dbConfig";

@Injectable()
export class RestaurantDao {
    private readonly logger = new Logger(RestaurantDao.name);

    constructor(@Inject(dbConfig.restaurantModel) private readonly restaurantModel: Model<Restaurant>) {}

    async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        try {
            this.logger.log(LoggerConstant.CreateRestaurantDao);
            const createdRestaurant = new this.restaurantModel(createRestaurantDto);
            this.logger.log(LoggerConstant.createRestaurantDoneDao);
            return createdRestaurant.save();
        } catch (error) {
            this.logger.error(LoggerConstant.createRestaurantErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll(): Promise<Restaurant[]> {
        try {
            this.logger.log(LoggerConstant.getRestaurantsDao);
            const find = this.restaurantModel.find().exec();
            this.logger.log(LoggerConstant.getRestaurantsDoneDao);
            return find
        } catch (error) {
            this.logger.error(LoggerConstant.getRestaurantsErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findById(id: string): Promise<Restaurant> {
        try {
            this.logger.log(LoggerConstant.getOneRestaurantsDao);
            const findone = this.restaurantModel.findById(id).exec();
            this.logger.log(LoggerConstant.getOneRestaurantsDoneDao);
            return findone
        } catch (error) {
            this.logger.error(LoggerConstant.getOneRestaurantsErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: string, createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        try {
            this.logger.log(LoggerConstant.updateOneRestaurantsDao);
            const update = this.restaurantModel.findByIdAndUpdate(id, createRestaurantDto, { new: true }).exec();
            this.logger.log(LoggerConstant.updateOneRestaurantsDoneDao);
            return update
        } catch (error) {
            this.logger.error(LoggerConstant.updateOneRestaurantsErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<Restaurant> {
        try {
            this.logger.log(LoggerConstant.deleteRestaurantsDao);
            const deleteres = this.restaurantModel.findByIdAndDelete(id).exec();
            this.logger.log(LoggerConstant.deleteRestaurantsDoneDao);
            return deleteres
        } catch (error) {
            this.logger.error(LoggerConstant.deleteRestaurantsErrorDao);
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}