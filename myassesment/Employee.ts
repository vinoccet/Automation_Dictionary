import { injectable } from "inversify";
import { employees } from "./Data";
import 'reflect-metadata';

export interface IEmployees{
    getAllemployeeIds(): number[];
    getAllemployeeFirstnames():string[];
    getAllemployeepositions():string[];
    getDepartmentIdByempId(empid:number):number;
    getDepartmentIdByposition(position:string):number;
    getFirstNameByposition(position:string):string;
}
@injectable()
export class Employee implements IEmployees{
    getAllemployeeIds(): number[] {
        return employees.map(emp=>emp.empid);
    }
    getAllemployeeFirstnames(): string[] {
        return employees.map(emp=> emp.name.split(" ")[0]);
    }
    getAllemployeepositions(): string[] {
        return employees.map(emp=>emp.position);
    }
    getDepartmentIdByempId(empid: number): number {
        return employees.find(emp=>emp.empid === empid)?.departmentId ?? -1;
    }
    getDepartmentIdByposition(position: string): number {
        return employees.find(emp=>emp.position === position)?.departmentId??-1;
    }
    getFirstNameByposition(position: string): string {
        return employees.find(emp=>emp.position === position)?.name.split(" ")[0]??"";
    }
}