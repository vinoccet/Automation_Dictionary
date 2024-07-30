import { employees } from "../../typescript/questions/assessment_data";
import { IEmployee } from "./interfaces";

export class Employee implements IEmployee{
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