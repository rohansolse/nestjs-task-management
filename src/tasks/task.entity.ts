import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./task-status.enum";

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus

}