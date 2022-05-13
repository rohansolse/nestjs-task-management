import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './create-task.dto';
import { FilterTaskDto } from './filter-task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksServices: TasksService) { }

    @Get()
    getTasksWithFilters(@Query() filertTaskDto: FilterTaskDto): Task[] {
        if (Object.keys(filertTaskDto).length === 0) {
            return this.tasksServices.getAllTasks();
        }
        else {
            return this.tasksServices.getFilterdTasks(filertTaskDto);
        }
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksServices.getTaskById(id);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        return this.tasksServices.deleteTask(id);
    }

    @Patch('/:id/:status')
    updateTaskStatus(@Param('id') id: string, @Param('status') status: TaskStatus): Task {
        return this.tasksServices.updateTaskStatus(id, status);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksServices.createTask(createTaskDto);
    }

}
