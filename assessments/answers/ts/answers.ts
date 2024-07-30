import { Department } from "./department";
import { Employee } from "./employee";
import { IDepartment, IEmployee } from "./interfaces";

const employee:IEmployee=new Employee()
const department:IDepartment=new Department()

// question 1
// get all emp id and print the respective department name
employee.getAllEmpIds().forEach(empid=>console.log(department.getDepartmentNameById(employee.getDepartmentIdByEmpId(empid))))

employee.getAllEmpIds().forEach(empid=>{
    const departmentId=employee.getDepartmentIdByEmpId(empid)
    const departmentName=department.getDepartmentNameById(departmentId)
    console.log(`departmentname: ${departmentName}`)
})