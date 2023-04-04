import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepositoty } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepositoty])
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule { }
