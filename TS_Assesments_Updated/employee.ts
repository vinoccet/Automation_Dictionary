import { employees } from "./data";
import { IEmployee } from "./interfaces";


export class Employee implements IEmployee{
    getAllEmpIds(): number[] {
        return employees.map(emp => emp.empid);
    }
    getAllEmpDeptId(): number[] {
        return employees.map(emp => emp.departmentId);   
    }
    getAllEmpNames(): string[] {
        return employees.map(emp => emp.name);
    }
    getAllEmpPositions(): string[] {
        return employees.map(emp => emp.position);
    }
    getDeptIdByEmpId(e:number): number{
        return employees.filter(emp =>emp.empid==e).map(emp1 => emp1.departmentId)[0]
    }
    getEmpIdByEmpName(n1:string):number{
        return employees.filter(emp =>emp.name==n1).map(emp1 =>emp1.empid)[0]
     
    }
    getEmpNameByEmpId(n1:number):string{
        return employees.filter(emp =>emp.empid==n1).map(emp1 =>emp1.name)[0]
     
    }
    
    getPostionByEmpId(e:number):string{
        return employees.filter(emp =>emp.empid==e).map(emp1 => emp1.position)[0]
    }

    
    getEmpIdByDeptId(d_in:number):number[]{
        return employees.filter(emp =>emp.departmentId==d_in).map(d1 =>d1.empid)
    }
    
}

