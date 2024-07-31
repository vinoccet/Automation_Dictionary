"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var departmentClass_1 = require("./departmentClass");
var employeeClass_1 = require("./employeeClass");
var questions_1 = require("./questions");
var employee = new employeeClass_1.employeeclass();
var department = new departmentClass_1.Department();
// question 1
// get all emp id and print the respective department name
employee.getAllEmpIds().forEach(function (empid) { return console.log(department.getDepartmentNameById(employee.getDepartmentIdByEmpId(empid))); });
employee.getAllEmpIds().forEach(function (empid) {
    var departmentId = employee.getDepartmentIdByEmpId(empid);
    var departmentName = department.getDepartmentNameById(departmentId);
    console.log("departmentname: ".concat(departmentName));
});
// for second question
// get all firstnmaes from emp loop and print the department names for respective first name
employee.getAllEmpNames().forEach(function (name) {
    var emp = questions_1.employees.find(function (emp) { return emp.name === name; });
    if (emp) {
        var departmentName = department.getDepartmentNameById(emp.departmentId);
        console.log("First name: ".concat(name.split(' ')[0], ", Department name: ").concat(departmentName));
    }
});
// for 3rd question 
//// get all positions from emp loop and print the department names for respective first name
employee.getAllEmpPositions().forEach(function (position) {
    var emp = questions_1.employees.find(function (emp) { return emp.position === position; });
    if (emp) {
        var departmentName = department.getDepartmentNameById(emp.departmentId);
        console.log("Position: ".concat(position, ", Department name: ").concat(departmentName));
    }
});
//// get the employee name and department name who got civil engineering skill
/*const civilEngineeringDept = department.find(dept => dept.skills?.name === "civil engineering");
if (civilEngineeringDept) {
    const emp = employees.find(emp => emp.departmentId === civilEngineeringDept.id);
    if (emp) {
        console.log(`Employee name: ${emp.name}, Department name: ${civilEngineeringDept.name}`);
    }
}*/
