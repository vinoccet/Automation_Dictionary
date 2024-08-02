import { employees } from "./questions";
import { empInterface } from "./interfaces";
import { injectable } from "inversify";
import "reflect-metadata";


@injectable()
export class employeeclass implements empInterface{
    getDepartmentIdByEmpId(empid: number): number {

        //find
        return employees.filter(emp=>emp.empid===empid).map(emp=>emp.departmentId)[0]
    }
    getAllEmpIds(): number[] {
        return employees.map(emp=>emp.empid)
    }
    getAllEmpNames(): string[] {
        return employees.map(emp=>emp.name)
    }
    getAllEmpPositions(): string[] {
        return employees.map(emp=>emp.position)
    }
    
}