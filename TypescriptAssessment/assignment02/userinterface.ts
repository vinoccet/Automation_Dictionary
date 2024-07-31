import { Cdepartment } from "./department";
import { Cemployee } from "./employee";

const emp=new Cemployee();
const dep=new Cdepartment();

emp.getAllEmployeeIds().forEach((empid)=>console.log(`${empid}-->${dep.getDepartmentNameByEmpId(emp.getDepartmentIdByEmpId(empid))}`));
emp.getAllEmployeeFirstnames().forEach((firstname)=>console.log(`${firstname}-->${dep.getDepartmentNameByFirstname(emp.getDepartmentIdByFirstname(firstname))}`));
emp.getAllEmployeePositions().forEach((position)=>console.log(`${emp.getFirstNameByPosition(position)}-->${position}-->${dep.getDepartmentNameByPosition(emp.getDepartmentIdByPosition(position))}`));
// emp.getAllEmployeeFirstnames().forEach((firstname)=>console.log(`${firstname}-->${dep.getDepartmentNameByFirstname(firstname)}`));
// emp.getAllEmployeePositions().forEach((position)=>console.log(`${emp.getFirstNameByPosition(position)}--->${position}--->${dep.getDepartmentNameByPosition(position)}`));
// dep.getAllSkills().forEach((skill)=>dep.print_Employeename_Departmentname_BySkill(skill));
// console.log(dep.getAllSkills());
dep.print_Employeename_Departmentname_BySkill("civil engineering");