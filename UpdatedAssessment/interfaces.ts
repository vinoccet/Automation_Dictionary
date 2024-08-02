export interface empInterface{
    getAllEmpIds():number[]
    getDepartmentIdByEmpId(empid:number):number
    getAllEmpNames():string[]
    getAllEmpPositions():string[]
    }
    
    export interface deptInterface{
        getDepartmentNameById(deptId:number):string
    }

    // prerequisites
// 1) the 2 entities should be mapped to interface, so 2 interfaces should be created
// 2) create 2 classes that implements these interfaces

// get all emp id and print the respective department name

// get all firstnmaes from emp loop and print the department names for respective first name

// get all positions from emp loop and print the department names for respective first name

// get the employee name and department name who got civil engineering skill