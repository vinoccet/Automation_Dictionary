
export interface IEmployee{
    getAllEmpIds():number[];
    getAllEmpNames():string[];
    getAllEmpPositions():string[];
    getAllEmpDeptId():number[];
    getEmpIdByDeptId(d:number):number[];
    
    getEmpNameByEmpId(n1:number):string
    getDeptIdByEmpId(e:number): number;
    getPostionByEmpId(e:number):string;
    getEmpIdByEmpName(id:string):number;
    

    //getEmpNameBySkill(s:string):string;

    
}

export interface IDepartment{
   getDepatmentNameByDepId(id:number):string;
   getDepartmentIdBySkill(s:string):number[];
   getAllDeptIds():number[];
  
}