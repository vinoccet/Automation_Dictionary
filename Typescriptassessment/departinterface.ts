export interface IDepartment {
    getDepartmentname(empid: number): string;
    getDepartmentnameByfirstname(empname: string): string;
    getdepartmentnamebyposition(empfirstname: string): string;
    getdepartnamebyskill(skill: string): string;
    getemployeenamebyskill(skill: string): string;

}



