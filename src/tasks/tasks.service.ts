import { Injectable, NotFoundException } from '@nestjs/common';
import { FilterTaskDto } from './dto/filter-task.dto';
import { TaskStatus } from './task-status.enum';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) { }
    // private tasks: Task[] = [];
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // async getTaskById(id: string): Promise<Task> {
    //     const found = await this.taskRepository.findOne(id);
    //     if (!found) {
    //         throw new NotFoundException(`Task with id ${id} not found`);
    //     }
    //     return found
    // }

    // getTaskById(id: string): Task {
    //     let task = this.tasks.find(task => task.id === id);
    //     if (!task) {
    //         throw new NotFoundException(`Task with id ${id} not found`);
    //     }
    //     return task
    // }

    // deleteTask(id: string): void {
    //     const task = this.getTaskById(id);
    //     if (!task) {
    //         throw new NotFoundException(`Task with id ${id} not found`);
    //     }
    //     this.tasks = this.tasks.filter(task => task.id !== id);
    //     return;
    // }

    // updateTaskStatus(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     if (!task) {
    //         throw new NotFoundException(`Task with id ${id} not found`);
    //     }
    //     task.status = status;
    //     return task;
    // }

    // getFilterdTasks(filertTaskDto: FilterTaskDto): Task[] {
    //     const { status, search } = filertTaskDto;
    //     let tasks = this.getAllTasks();
    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     if (search) {
    //         tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));
    //     }
    //     return tasks;
    // }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = createTaskDto;
        const task = this.taskRepository.create({
            title,
            description,
            status: TaskStatus.OPEN
        })
        await this.taskRepository.save(task)
        return task;
    }
}
