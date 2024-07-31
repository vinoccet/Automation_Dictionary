export interface empInterface{
    getAllEmpIds():number[]
    getDepartmentIdByEmpId(empid:number):number
    getAllEmpNames():string[]
    getAllEmpPositions():string[]
    }
    
    export interface deptInterface{
        getDepartmentNameById(deptId:number):string
    }