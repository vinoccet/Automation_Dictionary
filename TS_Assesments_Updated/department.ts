import { department } from "./data";
import { IDepartment } from "./interfaces";

export class Department implements IDepartment{
    getDepatmentNameByDepId(d: number): string {
       return department.filter(dep =>dep.id==d).map(dep1 =>dep1.name)[0]     
    }
    
    getDepartmentIdBySkill(s:string):number[]{
        return department.filter(dep=> dep.skills?.name==s).map(dep1 =>dep1.id)

    }
    getAllDeptIds(): number[] {
        return department.map(dep =>dep.id);
    }


}

