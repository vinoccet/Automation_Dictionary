import { employees } from "./Data";
import { Department, IDepartment } from "./Depart";
import { Employee, IEmployees } from "./Employee";
import { TYPES } from "./inversify/Types";
import { container } from "./inversify/container";
const emp = container.get<IEmployees>(TYPES.Employee);
const dep = container.get<IDepartment>(TYPES.Department);

emp.getAllemployeeIds().forEach(empId=> {
        console.log(`${empId}${dep.getDepartmentNameByEmpID(empId)}`)
    });

    emp.getAllemployeeFirstnames().forEach(firstname=>{
        const empObj = employees.find(e=>e.name.split(" ")[0]=== firstname);
        if (empObj){
            console.log(`${firstname}:${dep.getDepartmentNameByEmpID(empObj.empid)}`);
        }
    });

    emp.getAllemployeepositions().forEach(position=>{
        const firstname = emp.getFirstNameByposition(position);

        console.log(`${firstname}:${position}:${dep.getDepartmentNameByEmpID(emp.getDepartmentIdByposition(position))}`);
    });
    dep.printEmployeeNameAndDepartmentBySkill("civil engineering");