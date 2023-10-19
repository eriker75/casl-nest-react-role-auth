import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModules } from './modules';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mydatabase'),
    ...AppModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
