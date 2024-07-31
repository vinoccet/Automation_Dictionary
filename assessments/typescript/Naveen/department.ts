import { department } from "./data";
import { IDepartment } from "./interface";

export class CDepartment implements IDepartment {
  getDeptNameById(deptId: number): string {
    return department.find((emp) => emp.id === deptId)?.name ?? "";
    //return department.filter((emp) => emp.id === deptId).map((emp) => emp.name)[0];
  }
  getCivilEmpId(deptId: number): number[] {
    return department
      .filter(
        (emp) => emp.id === deptId && emp.skills?.name === "civil engineering"
      )
      .map((emp) => emp.id);
  }
  getCivilSkill(deptId: number): string {
    return (
      department.find(
        (emp) => emp.id === deptId && emp.skills?.name === "civil engineering"
      )?.skills?.name ?? ""
    );
    //return department.filter((emp) => emp.id === deptId && emp.skills?.name === "civil engineering").map((emp) => emp.skills?.name)[0];
  }
}
