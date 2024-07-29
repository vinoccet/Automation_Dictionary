const department=[
    {
      id: 1,
      name: "Human Resources",
      location: "Building A",
      skills: {
          name:"communication",
          proficiency:"100"
      }
    },
    {
      id: 2,
      name: "Engineering",
      location: "Building B",
      skills: {
          name:"civil engineering",
          proficiency:"50"
                  }
          
    },
    {
      id: 3,
      name: "Marketing",
      location: "Building C",
      rewards: {
          name:"MBA in marketing",
          points:"10"
  }
    }
]


const employees=[
    {
      empid: 101,
      name: "Alice Johnson",
      departmentId: 1,
      position: "HR Manager"
    },
    {
      empid: 102,
      name: "Bob Smith",
      departmentId: 2,
      position: "Software Engineer"
    },
    {
      empid: 103,
      name: "Charlie Brown",
      departmentId: 3,
      position: "Marketing Specialist"
    }
]

interface test1{
  getEmpIdAndDeptName():void;
  getFirstNameAndDeptName():void;
}

interface test2{
  getFirstNamePostAndDeptName():void;
  getEmpNameDeptCivil():void;

}

export class test3 implements test1{
  public getEmpIdAndDeptName(): void {
    department.map(m =>{
      console.log(`Id number ${m.id} refers to ${m.name} Department`);
  })
  console.log("---------------------------------------------------------")
  }
  public getFirstNameAndDeptName(): void {
    employees.map(m1 =>{
      let name1 =m1.name.split(" ");
      let did=m1.departmentId
      department.map(m2=>{ 
          if(m2.id==did){
              console.log(`Associate ${name1[0]} belongs to Department ${m2.name}`)
          }
          
      })
  })
    console.log("---------------------------------------------------------")
  }

}

export class test4 implements test2 {
  public getFirstNamePostAndDeptName(): void {
    employees.map(m3 =>{
      let pos=m3.position
      let name2:string[] = m3.name.split(" ");
      let did= m3.departmentId
      department.map(m4=>{
          if(did==m4.id){
              console.log(`Associate ${name2[0]} working as ${pos} belongs to department ${m4.name}`)
          }
      })
  
    })
    console.log("---------------------------------------------------------")
  }
  public getEmpNameDeptCivil(): void {
    department.filter(m => {
      if(m.skills?.name=="civil engineering"){
          employees.map(m1 =>{
             if( m1.departmentId==m.id){
              console.log(`Associate ${m1.name} from department ${m.name} has skill ${m.skills?.name}`)
             }
          })
      }
     
  })
  console.log("---------------------------------------------------------")
  }

}










