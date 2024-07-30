import { department, employees } from "./data";
import { Department } from "./department";
import { Employee } from "./employee";
import { IDepartment, IEmployee } from "./interfaces";

//creating objects of respective classes
const e1:IEmployee=new Employee()
const d1:IDepartment=new Department();

//Q1)get all emp id and print the respective department name
e1.getAllEmpIds().forEach(empid => {
    let depId= e1.getDeptIdByEmpId(empid);
    let depName=d1.getDepatmentNameByDepId(depId)

    console.log(`Emp id ${empid} and Department name ${depName}`)
});

console.log("--------------------------------------------------------------------")
//Q2)get all firstnames from emp loop and print the department names for respective first name
e1.getAllEmpNames().forEach(empname=>{
    let empId=e1.getEmpIdByEmpName(empname);
    let deptId=e1.getDeptIdByEmpId(empId);
    let deptN=d1.getDepatmentNameByDepId(deptId);

    let firstName=empname.split(" ")[0];

    console.log(`First name is ${firstName} and Department name is ${deptN}`)

})



console.log("--------------------------------------------------------------------")
// Q3)get all positions from emp loop and print the department names for respective first name

e1.getAllEmpNames().forEach(empname=>{
    let empId=e1.getEmpIdByEmpName(empname);
    let deptId=e1.getDeptIdByEmpId(empId);
    let pos=e1.getPostionByEmpId(empId);
    let deptN=d1.getDepatmentNameByDepId(deptId);

    let firstName=empname.split(" ")[0];

    console.log(`First name is ${firstName}, Position is ${pos} and Department name is ${deptN}`)

})

console.log("--------------------------------------------------------------------")
// Q4)get the employee name and department name who got civil engineering skill
//skill-->deptid-->empid-->name and deptname

// let s:string="civil engineering";
// let filteredemp:string[] = e1.getAllEmpNames().filter(empname=> empname==s);
const s:string="civil engineering";
let filter_did:number[]=d1.getDepartmentIdBySkill(s) // [d=1.d=2]
//console.log(filter_did);
 filter_did.forEach( d =>{
    let d_name =d1.getDepatmentNameByDepId(d);
    let e_ids=e1.getEmpIdByDeptId(d)
   //console.log(d_name);

   e_ids.forEach(e =>{
    let e_name= e1.getEmpNameByEmpId(e)
    console.log(`Name is ${e_name} Department name is ${d_name} and Skill is ${s}`)
    });

 });










