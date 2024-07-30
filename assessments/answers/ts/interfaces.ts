export interface IEmployee{
getAllEmpIds():number[]
getDepartmentIdByEmpId(empid:number):number
getAllEmpNames():string[]
getAllEmpPositions():string[]
}

export interface IDepartment{
    getDepartmentNameById(deptId:number):string
}