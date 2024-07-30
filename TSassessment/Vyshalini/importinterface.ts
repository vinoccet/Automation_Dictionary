import { Departmentclass, Employeeclass } from "./Interfacequestion"
let departmentobj = new Departmentclass();
console.log("*********ANS1*************");
departmentobj.getDepartmentnamebyempid()
console.log("*********ANS2*************");
departmentobj.getDepartmentnamebyfirstname();
let EmployeeObj = new Employeeclass();
console.log("*********ANS3*************");
EmployeeObj.getpositionandprintdepname();
console.log("*********ANS4*************");
EmployeeObj.printempnameanddepnameofcivil();