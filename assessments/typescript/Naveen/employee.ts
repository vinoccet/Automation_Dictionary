import { employees } from "./data";
import { IEmployee } from "./interface";

export class CEmployee implements IEmployee {
  getAllEmpId(): number[] {
    return employees.map((emp) => emp.empid);
  }
  getDeptIdByEmpId(empId: number): number {
    return employees.find((emp) => emp.empid === empId)?.departmentId ?? 0;

    // return employees
    //   .filter((emp) => emp.empid === empId)
    //   .map((emp) => emp.departmentId)[0];
  }

  getFirstNameByDeptId(deptId: number): string {
    return (
      employees
        .find((emp) => emp.departmentId === deptId)
        ?.name.split(" ")[0] ?? ""
    );
  }
  getPositionByDeptId(deptId: number): string {
    return employees.find((emp) => emp.departmentId === deptId)?.position ?? "";
    //return employees.filter((emp) => emp.departmentId === deptId).map((emp) => emp.position)[0];
  }
  getEmployeeName(deptId: number): string {
    return employees.find((emp) => emp.departmentId === deptId)?.name ?? "";
    //return employees.filter((emp) => emp.departmentId === deptId).map((emp) => emp.name)[0];
  }
}
