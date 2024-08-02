import { Container } from "inversify";
import { Department } from "./departmentClass";
import { employeeclass } from "./employeeClass";
import { deptInterface, empInterface } from "./interfaces";
import { employees, department } from "./questions";
import { container } from "./container";
import { TYPES } from "./types";

//const employee:empInterface=new employeeclass()

const employeeInversify:empInterface=container.get<empInterface>(TYPES.employeeclass);
//const departmentobj:deptInterface=new Department()
const departmentInversify:deptInterface=container.get<deptInterface>(TYPES.departmentClass);

// question 1
// get all emp id and print the respective department name
employeeInversify.getAllEmpIds().forEach(empid=>console.log(`${empid}, ${departmentInversify.getDepartmentNameById(employeeInversify.getDepartmentIdByEmpId(empid))}`))

employeeInversify.getAllEmpIds().forEach(empid=>{
    const departmentId=employeeInversify.getDepartmentIdByEmpId(empid)
    const departmentName=departmentInversify.getDepartmentNameById(departmentId)
    console.log(`departmentname: ${departmentName}`)
})

// for second question
// get all firstnmaes from emp loop and print the department names for respective first name


employeeInversify.getAllEmpNames().forEach(name => {
    const emp = employees.find(emp => emp.name === name);
    if (emp) {
        const departmentName = departmentInversify.getDepartmentNameById(emp.departmentId);
        console.log(`First name: ${name.split(' ')[0]}, Department name: ${departmentName}`);
    }
});



// for 3rd question 
//// get all positions from emp loop and print the department names for respective first name

employeeInversify.getAllEmpPositions().forEach(position => {
    const emp = employees.find(emp => emp.position === position);
    if (emp) {
        const departmentName = departmentInversify.getDepartmentNameById(emp.departmentId);
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


