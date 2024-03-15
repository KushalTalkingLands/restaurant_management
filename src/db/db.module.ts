import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { dbConfig } from 'src/core/config/dbConfig';
import { databaseProviders } from './db.provider';
import { userModelProviders } from './model-Providers/userModel.provider';
@Module({
    providers:[...databaseProviders,...userModelProviders],
    exports: [...databaseProviders,...userModelProviders],
})
export class DbModule {}
