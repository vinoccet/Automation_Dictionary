import { Department } from "./departmentClass";
import { employeeclass } from "./employeeClass";
import { deptInterface, empInterface } from "./interfaces";
import { employees, department } from "./questions";

const employee:empInterface=new employeeclass()
const departmentobj:deptInterface=new Department()

// question 1
// get all emp id and print the respective department name
employee.getAllEmpIds().forEach(empid=>console.log(`${empid}, ${departmentobj.getDepartmentNameById(employee.getDepartmentIdByEmpId(empid))}`))

employee.getAllEmpIds().forEach(empid=>{
    const departmentId=employee.getDepartmentIdByEmpId(empid)
    const departmentName=departmentobj.getDepartmentNameById(departmentId)
    console.log(`departmentname: ${departmentName}`)
})

// for second question
// get all firstnmaes from emp loop and print the department names for respective first name


employee.getAllEmpNames().forEach(name => {
    const emp = employees.find(emp => emp.name === name);
    if (emp) {
        const departmentName = departmentobj.getDepartmentNameById(emp.departmentId);
        console.log(`First name: ${name.split(' ')[0]}, Department name: ${departmentName}`);
    }
});



// for 3rd question 
//// get all positions from emp loop and print the department names for respective first name

employee.getAllEmpPositions().forEach(position => {
    const emp = employees.find(emp => emp.position === position);
    if (emp) {
        const departmentName = departmentobj.getDepartmentNameById(emp.departmentId);
        console.log(`Position: ${position}, Department name: ${departmentName}`);
    }
});

//// get the employee name and department name who got civil engineering skill



const civilEngineeringDept = department.find(dept => dept.skills?.name === "civil engineering");
if (civilEngineeringDept) {
    const emp = employees.find(emp => emp.departmentId === civilEngineeringDept.id);
    if (emp) {
        console.log(`Employee name: ${emp.name}, Department name: ${civilEngineeringDept.name}`);
    }
}


