import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';
import { updateTaskStatusDto } from './dto/update-task.dto';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    // private logger = new Logger('TaskController');
    constructor(private tasksServices: TasksService) { }

    // @Get()
    // getTasksWithFilters(@Query() filertTaskDto: FilterTaskDto): Task[] {
    //     if (Object.keys(filertTaskDto).length === 0) {
    //         this.logger.verbose('No filter provided');
    //         return this.tasksServices.getAllTasks();
    //     }
    //     else {
    //         return this.tasksServices.getFilterdTasks(filertTaskDto);
    //     }
    // }

    // @Get('/:id')
    // getTaskById(@Param('id') id: string): Promise<Task> {
    //     return this.tasksServices.getTaskById(id);
    // }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     return this.tasksServices.deleteTask(id);
    // }

    // @Patch('/:id')
    // updateTaskStatus(@Param('id') id: string, @Body() updateTaskStatusDto: updateTaskStatusDto): Task {
    //     const { status } = updateTaskStatusDto;
    //     return this.tasksServices.updateTaskStatus(id, status);
    // }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksServices.createTask(createTaskDto);
    }

}
