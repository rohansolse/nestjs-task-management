import { Controller, Get } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksServices: TasksService) { }

    @Get()
    getTasks(): Task[] {
        return this.tasksServices.getAllTasks();
    }

}
