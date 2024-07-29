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
// Create an interface that store the values of department array
  interface departments{
    id:number,
    name:string,
    location:string,
    skills: {
        name:string,
        proficiency:string
    },
    rewards?: {
        name:string,
        points:string
}

  }
// create an Interface that store the values of employees array
  interface employee{
    empid: number,
    name: string,
    departmentId: number,
    position: string
  }
// create a class that implements the departments Interface
  class departmentClass implements departments {
// Enter each and evry parameter in the class to access them from departments interface
    id:number;
    name:string;
    location:string;
    skills: {
        name:string,
        proficiency:string
    };
    rewards: {
        name:string,
        points:string
}

// Use constructor for declaring the  the parameters
    constructor( 
        id:number,
        name:string,
        location:string,
        skills: {
            name:string,
            proficiency:string
        },
        rewards?: {
            name:string,
            points:string
    }){
        this.id=id;
        this.name=name;
        this.location=location;
        this.skills=skills;
        //this.rewards=rewards;

    };
  }
// Create another class for implementing the employee interface
  class employeeclass implements employee{
// enter all the parameters / arguments /values to access them from employee Interface
    empid: number;
    name: string;
    departmentId: number;
    position: string
// Create a constructor and declare all the parameters in to the constructor
    constructor(empid: number,
        name: string,
        departmentId: number,
        position: string){

            this.empid=empid;
            this.name=name;
            this.departmentId;
            this.position=position

    }

  }

  let dp1=new departmentClass(1,"Human Resources","Building A",{name:"communication",proficiency:"100"},{name:"MBA in marketing",points:"10"});
  
  let dpc2=new departmentClass(2,"Engineering","Building B",{name:"Civil Engineering",proficiency:"50"})

  let dpc3=new departmentClass(3,"Marketing","Building C",{name:"MBA in Marketing",proficiency:"10"})

  console.log("The values of an first object of department array are:", dp1);
  console.log("The values of an second object of department array are:", dpc2);
  console.log("The values of an third object of department array are:", dpc3);

  let empClass1= new employeeclass(101,"Alice Johnson", 1,"HR Manager");
  let empClass2= new employeeclass(102,"Bob Smith", 2,"SoftWare Engineer");
  let empClass3= new employeeclass(103,"Charlie Brown", 3,"Marketing Specialist");
  console.log("The details of first object from employees array", empClass1)
  console.log("The details of Second object from employees array", empClass2)
  console.log("The details of Third object from employees array", empClass3)

  //get all emp id and print the respective department name
  

  employees.forEach(emp => {
    department.forEach(dept => {
      if (emp.departmentId === dept.id) {
        console.log(`Employee ID: ${emp.empid}, Department: ${dept.name}`);
      }
    });
  });

  // get all firstnmaes from emp loop and print the department names for respective first name


  employees.forEach(emp => {
    department.forEach(dept => {
      if (emp.departmentId === dept.id) {
        const firstName = emp.name.split(' ')[0];
        console.log(`First Name: ${firstName}, Department: ${dept.name}`);
      }
    });
  });

  
// get all positions from emp loop and print the department names for respective first name
  employees.forEach(emp => {
    department.forEach(dept => {
      if (emp.departmentId === dept.id) {
        const firstName = emp.name.split(' ')[0];
        console.log(`Position: ${emp.position}, First Name: ${firstName}, Department: ${dept.name}`);
      }
    });
  });

  
// get the employee name and department name who got civil engineering skill
  department.forEach(dept => {
    if (dept.skills && dept.skills.name === "civil engineering") {
      employees.forEach(emp => {
        if (emp.departmentId === dept.id) {
          console.log(`Employee Name: ${emp.name}, Department: ${dept.name}`);
        }
      });
    }
  });
  