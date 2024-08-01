import { injectable } from "inversify";
import { department,employees } from "./Data";
import 'reflect-metadata';


export interface IDepartment{
    getAllskills():string[];
    getDepartmentIdBySkill(skill:string):number;
    getDepartmentNameBySkill(skill:string):string;
    getDepartmentNameByEmpID(empid:number):string;
    printEmployeeNameAndDepartmentBySkill(skill:string):void;
}
@injectable()
export class Department implements IDepartment{
    getAllskills(): string[] {
        return department.map(dep => dep.skills?.name ?? "");
    }
    getDepartmentIdBySkill(skill: string): number {
        return department.find(dep=>dep.skills?.name===skill)?.id??-1
    }
    getDepartmentNameBySkill(skill: string): string {
        return department.find(dep=>dep.skills?.name===skill)?.name?? "";
    }

    getDepartmentNameByEmpID(empid: number): string {
        const emp = employees.find(e => e.empid===empid);

        return department.find(dep =>dep.id===emp?.departmentId)?.name??"";
    }
    printEmployeeNameAndDepartmentBySkill(skill: string): void {
        const departmentId = this.getDepartmentIdBySkill(skill);
        const emp = employees.find(e =>e.departmentId === departmentId);
        if(emp){
            console.log(`${emp.name}:${this.getDepartmentNameBySkill(skill)}`)
        }
    }
}