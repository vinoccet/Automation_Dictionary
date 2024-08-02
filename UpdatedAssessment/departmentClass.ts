import { department } from "./questions";
import { deptInterface } from "./interfaces";
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class Department implements deptInterface{
    getDepartmentNameById(deptId: number): string {
        return department.filter(dept=>dept.id===deptId).map(dep=>dep.name)[0]
    }
    
}