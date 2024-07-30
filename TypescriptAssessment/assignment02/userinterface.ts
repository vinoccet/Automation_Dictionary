import { Cdepartment, Cemployee } from "./answer";

const dep=new Cdepartment();
const emp=new Cemployee();

dep.printDepartmentById(emp.getAllEmployeeIds());
console.log("__________________________________________________");
dep.printDepartmentByFirstname(emp.getAllEmployeeFirstnames());
console.log("__________________________________________________");
dep.printDepartmentByPosition(emp.getAllEmployeePositions());
console.log("__________________________________________________");
dep.printEmployeeAndDepartmentBySkills(["civil engineering"]);