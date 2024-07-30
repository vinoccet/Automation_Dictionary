import { department } from "../../typescript/questions/assessment_data";
import { IDepartment } from "./interfaces";

export class Department implements IDepartment{
    getDepartmentNameById(deptId: number): string {
        return department.filter(dept=>dept.id===deptId).map(dep=>dep.name)[0]
    }
    
}