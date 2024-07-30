import { department, employees } from "./data";
import { IDepartment } from "./departinterface";

// get all emp id and print the respective department name

// get all firstnmaes from emp loop and print the department names for respective first name

// get all positions from emp loop and print the department names for respective first name

// get the employee name and department name who got civil engineering skill

// export const department = [
//     {
//         id: 1,
//         name: "Human Resources",
//         location: "Building A",
//         skills: {
//             name: "communication",
//             proficiency: "100"
//         }
//     },
//     {
//         id: 2,
//         name: "Engineering",
//         location: "Building B",
//         skills: {
//             name: "civil engineering",
//             proficiency: "50"
//         }

//     },
//     {
//         id: 3,
//         name: "Marketing",
//         location: "Building C",
//         rewards: {
//             name: "MBA in marketing",
//             points: "10"
//         }
//     }
// ]

// export const employees = [
//     {
//         empid: 101,
//         name: "Alice Johnson",
//         departmentId: 1,
//         position: "HR Manager"
//     },
//     {
//         empid: 102,
//         name: "Bob Smith",
//         departmentId: 2,
//         position: "Software Engineer"
//     },
//     {
//         empid: 103,
//         name: "Charlie Brown",
//         departmentId: 3,
//         position: "Marketing Specialist"
//     }
// ]

export class DepartmentClass implements IDepartment {
   
   
   
    getDepartmentname(empid: number): string {
       let depid= employees.filter((employid) => employid.empid === empid)
            .map((employid) => employid.departmentId)[0]
       return  department.filter((depart) => depart.id === depid).map((depart)=>depart.name)[0];
    }

    getDepartmentnameByfirstname(empname: string): string {
         let employiid = employees.filter((employfirstname)=>employfirstname.name.split(" ")[0]===empname)
                        .map((employfirstname)=>employfirstname.departmentId)[0]
                     return department.filter((deptt)=>deptt.id === employiid).map((deptid)=>deptid.name)[0];
    }

    getdepartmentnamebyposition(emppos: string):string{
         let empidd =  employees.filter((emppos1)=>emppos1.position===emppos)
             .map((emppos1)=>emppos1.departmentId)[0]
             return department.filter((dept)=>dept.id===empidd).map((dept)=>dept.name)[0];
    }
    getemployeenamebyskill(skill: string): string {
        let deptid = department.filter((dept)=>dept.skills?.name===skill).map((dept)=>dept.id)[0]
        return employees.filter((emp)=>emp.departmentId===deptid).map((emp)=>emp.name)[0];
 
     }
     getdepartnamebyskill(skill: string): string {
         return department.filter((dept)=>dept.skills?.name===skill).map((dept)=>dept.name)[0];
     }
}



  



















































// getDepartmentIdByEmpId(empid: number): number {

//     //find
//     return employees.filter(emp=>emp.empid===empid).map(emp=>emp.departmentId)[0]

// export class Department implements IDepartment{
//     getDepartmentNameById(deptId: number): string {
//         return department.filter(dept=>dept.id===deptId).map(dep=>dep.name)[0]
//     }
    
// }

// employee.getAllEmpIds().forEach(empid=>{
//     const departmentId=employee.getDepartmentIdByEmpId(empid)
//     const departmentName=department.getDepartmentNameById(departmentId)
//     console.log(`departmentname: ${departmentName}`)
// })