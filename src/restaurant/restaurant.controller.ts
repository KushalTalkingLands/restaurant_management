import { Body, Controller, Delete, Get, HttpException, HttpStatus, Logger, Param, Post, Put } from '@nestjs/common';
import { CreateRestaurantDto } from 'src/core/dto/restaurant.dto';
import { Restaurant } from 'src/core/interface/restaurant.interface';
import { RestaurantService } from './restaurant.service';
import { appConfig } from 'src/core/config/appConfig';
import { LoggerConstant } from 'src/core/constants/loggerConstant';

@Controller(appConfig.restaurantController)
export class RestaurantController {
    private readonly logger = new Logger(RestaurantController.name);
    constructor(private readonly restaurantService: RestaurantService) { }

    @Post()
    async create(@Body() createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        this.logger.log(LoggerConstant.CreateRestaurantController);
        try{
        const createRestaurant = this.restaurantService.create(createRestaurantDto);
        this.logger.log(LoggerConstant.createRestaurantDone);
        return createRestaurant
        }catch(err){
            this.logger.error(LoggerConstant.createRestaurantError)
            throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
        }
    }
    @Get()
    async findAll(): Promise<Restaurant[]> {
        this.logger.log(LoggerConstant.getRestaurants);
        try{
        const findall = this.restaurantService.findAll();
        this.logger.log(LoggerConstant.getRestaurantsDone)
        return findall
        }catch(err){
            this.logger.error(LoggerConstant.getRestaurantsError)
            throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
        }
    }

    @Get(appConfig.restaurantParamId)
    async findOne(@Param(appConfig.restaurantId) id: string): Promise<Restaurant> {
        // return 
        try{
            const findone = this.restaurantService.findById(id);
            this.logger.log(LoggerConstant.getOneRestaurantsDone)
            return findone
            }catch(err){
                this.logger.error(LoggerConstant.getOneRestaurantsError)
                throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
            }
    }

    @Put(appConfig.restaurantParamId)
    async update(@Param(appConfig.restaurantId) id: string, @Body() updateRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        // return 
        try{
            const update = this.restaurantService.update(id, updateRestaurantDto);
            this.logger.log(LoggerConstant.updateOneRestaurantsDone)
            return update
            }catch(err){
                this.logger.error(LoggerConstant.updateOneRestaurantsError)
                throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
            }
    }

    @Delete(appConfig.restaurantParamId)
    async remove(@Param(appConfig.restaurantId) id: string): Promise<Restaurant> {
        // return 
        try{
            const deleteres = this.restaurantService.delete(id);
            this.logger.log(LoggerConstant.deleteRestaurantsDone)
            return deleteres
            }catch(err){
                this.logger.error(LoggerConstant.deleteRestaurantsError)
                throw new HttpException(err.message,HttpStatus.BAD_REQUEST)
            }
    }
}
