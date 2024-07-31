export interface IEmployee {
  getAllEmpId(): number[];
  getDeptIdByEmpId(empId: number): number;
  getFirstNameByDeptId(deptId: number): string;
  getPositionByDeptId(deptId: number): string;
  getEmployeeName(deptId: number): string;
}

export interface IDepartment {
  getDeptNameById(deptId: number): string;
  getCivilSkill(deptId: number): string;
  getCivilEmpId(deptId: number): number[];
}
