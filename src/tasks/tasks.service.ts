import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { FilterTaskDto } from './dto/filter-task.dto';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];
    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        let task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        return task
    }

    deleteTask(id: string): void {
        const task = this.getTaskById(id);
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        this.tasks = this.tasks.filter(task => task.id !== id);
        return;
    }

    updateTaskStatus(id: string, status: TaskStatus): Task {
        const task = this.getTaskById(id);
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        task.status = status;
        return task;
    }

    getFilterdTasks(filertTaskDto: FilterTaskDto): Task[] {
        const { status, search } = filertTaskDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = tasks.filter(task => task.status === status);
        }
        if (search) {
            tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));
        }
        return tasks;
    }

    createTask(createTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.tasks.push(task);
        return task;
    }
}
