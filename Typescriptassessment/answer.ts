import { Employeeclass } from "./employclass";
import { DepartmentClass } from "./departclass";
let employobject = new Employeeclass();
let deptobject = new DepartmentClass();
employobject.getallempid().forEach((empid) => console.log(`${empid}: ${deptobject.getDepartmentname(empid)}`));
employobject.getallfirstname().forEach((empname) => console.log(`${empname}:${deptobject.getDepartmentnameByfirstname(empname)}`));
console.log("****Question3***");
employobject.getallpositions().forEach((pos) => console.log(`${employobject.getfirstnamebyposition(pos)}:${pos}:${deptobject.getdepartmentnamebyposition(pos)}`));
console.log("******Question4**********")
let s = "civil engineering"
console.log(`${deptobject.getemployeenamebyskill(s)}: ${deptobject.getdepartnamebyskill(s)}`);