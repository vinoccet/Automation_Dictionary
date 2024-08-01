import { Employeeclass } from "./employclass";
import { DepartmentClass } from "./departclass";
import { IEmployees } from "./employinterface";
import { IDepartment } from "./departinterface";
import { container } from "./inversify/containers";
import { TYPES } from "./inversify/types";

//let employobject: IEmployees = new Employeeclass();
const employobjectInversify: IEmployees = container.get<IEmployees>(TYPES.Employeeclass);
//let deptobject: IDepartment = new DepartmentClass();
const deptobjectainversify: IDepartment = container.get<IDepartment>(TYPES.Departmentclass);
employobjectInversify.getallempid().forEach((empid) => console.log(`${empid}: ${deptobjectainversify.getDepartmentname(empid)}`));
employobjectInversify.getallfirstname().forEach((empname) => console.log(`${empname}:${deptobjectainversify.getDepartmentnameByfirstname(empname)}`));
console.log("****Question3***");
employobjectInversify.getallpositions().forEach((pos) => console.log(`${employobjectInversify.getfirstnamebyposition(pos)}:${pos}:${deptobjectainversify.getdepartmentnamebyposition(pos)}`));
console.log("******Question4**********")
let s = "civil engineering"
console.log(`${deptobjectainversify.getemployeenamebyskill(s)}: ${deptobjectainversify.getdepartnamebyskill(s)}`);