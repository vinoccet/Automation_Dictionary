import { employees } from "./data";
import { CDepartment } from "./department";
import { CEmployee } from "./employee";

const Employee = new CEmployee();
const Department = new CDepartment();

// question 1
// get all emp id and print the respective department name
console.log("Question 1");
Employee.getAllEmpId().forEach((emp) => {
  const deptId = Employee.getDeptIdByEmpId(emp);
  const deptName = Department.getDeptNameById(deptId);
  console.log(
    `Employee Id: ${emp} and its respective department name is ${deptName}`
  );
  //Employee.getAllEmpId().forEach(emp=>console.log(Department.getDeptNameById(Employee.getDeptIdByEmpId(emp))));
});

// question 2
// get all firstnmaes from emp loop and print the department names for respective first name
console.log("Question 2");
Employee.getAllEmpId().forEach((emp) => {
  const deptId = Employee.getDeptIdByEmpId(emp);
  const deptName = Department.getDeptNameById(deptId);
  const firstName = Employee.getFirstNameByDeptId(deptId);
  console.log(
    `First name of Employee id: ${emp} is ${firstName} and his department name is ${deptName}`
  );
  //Employee.getAllEmpId().forEach((emp) =>console.log(Department.getDeptNameById(Employee.getDeptIdByEmpId(emp))));
});

// question 3
// get all positions from emp loop and print the department names for respective first name
console.log("Question 3");
Employee.getAllEmpId().forEach((emp) => {
  const deptId = Employee.getDeptIdByEmpId(emp);
  const deptName = Department.getDeptNameById(deptId);
  const firstName = Employee.getFirstNameByDeptId(deptId);
  const position = Employee.getPositionByDeptId(deptId);
  console.log(
    `Position of ${firstName} in ${deptName} department is ${position}`
  );
});

//question 4
// get the employee name and department name who got civil engineering skill
console.log("Question 4");
Employee.getAllEmpId().forEach((emp) => {
  const deptId = Employee.getDeptIdByEmpId(emp);
  const deptName = Department.getDeptNameById(deptId);
  const Name = Employee.getEmployeeName(deptId);
  Department.getCivilEmpId(deptId).forEach((_emp) => {
    const civilId = Department.getCivilEmpId(deptId);
    const skill = Department.getCivilSkill(civilId[0]);
    console.log(`${Name} has ${skill} and his department name is ${deptName}`);
  });
});
