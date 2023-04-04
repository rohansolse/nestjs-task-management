import { EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";

@EntityRepository(Task)
export class TaskRepositoty extends Repository<Task>{

}