import { employees } from "./data";
import { CDepartment } from "./department";
import { CEmployee } from "./employee";
import { IDepartment, IEmployee } from "./interface";
import { container } from "./inversify/containers";
import { TYPES } from "./inversify/types";

// const Employee: IEmployee = new CEmployee();
const EmployeeInversify: IEmployee = container.get<IEmployee>(TYPES.Employee);
// const Department: IDepartment = new CDepartment();
const DepartmentInversify: IDepartment = container.get<IDepartment>(
  TYPES.Department
);

// question 1
// get all emp id and print the respective department name
console.log("Question 1");
EmployeeInversify.getAllEmpId().forEach((emp) => {
  const deptId = EmployeeInversify.getDeptIdByEmpId(emp);
  const deptName = DepartmentInversify.getDeptNameById(deptId);
  console.log(
    `Employee Id: ${emp} and its respective department name is ${deptName}`
  );
  //Employee.getAllEmpId().forEach(emp=>console.log(Department.getDeptNameById(Employee.getDeptIdByEmpId(emp))));
});

// question 2
// get all firstnmaes from emp loop and print the department names for respective first name
console.log("Question 2");
EmployeeInversify.getAllEmpId().forEach((emp) => {
  const deptId = EmployeeInversify.getDeptIdByEmpId(emp);
  const deptName = DepartmentInversify.getDeptNameById(deptId);
  const firstName = EmployeeInversify.getFirstNameByDeptId(deptId);
  console.log(
    `First name of Employee id: ${emp} is ${firstName} and his department name is ${deptName}`
  );
  //Employee.getAllEmpId().forEach((emp) =>console.log(Department.getDeptNameById(Employee.getDeptIdByEmpId(emp))));
});

// question 3
// get all positions from emp loop and print the department names for respective first name
console.log("Question 3");
EmployeeInversify.getAllEmpId().forEach((emp) => {
  const deptId = EmployeeInversify.getDeptIdByEmpId(emp);
  const deptName = DepartmentInversify.getDeptNameById(deptId);
  const firstName = EmployeeInversify.getFirstNameByDeptId(deptId);
  const position = EmployeeInversify.getPositionByDeptId(deptId);
  console.log(
    `Position of ${firstName} in ${deptName} department is ${position}`
  );
});

//question 4
// get the employee name and department name who got civil engineering skill
console.log("Question 4");
EmployeeInversify.getAllEmpId().forEach((emp) => {
  const deptId = EmployeeInversify.getDeptIdByEmpId(emp);
  const deptName = DepartmentInversify.getDeptNameById(deptId);
  const Name = EmployeeInversify.getEmployeeName(deptId);
  DepartmentInversify.getCivilEmpId(deptId).forEach((_emp) => {
    const civilId = DepartmentInversify.getCivilEmpId(deptId);
    const skill = DepartmentInversify.getCivilSkill(civilId[0]);
    console.log(`${Name} has ${skill} and his department name is ${deptName}`);
  });
});
