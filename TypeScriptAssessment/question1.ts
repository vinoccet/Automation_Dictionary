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



  //get all emp id and print the respective department name

  // get all firstnmaes from emp loop and print the department names for respective first name
  
  // get all positions from emp loop and print the department names for respective first name
  
  // get the employee name and department name who got civil engineering skill




  /*const employeeDepartments = employees.map(employee => {
    const departments = department.find(dept => dept.id === employee.departmentId);
    return {
      empid: employee.empid,
      departmentName: department ? department.name : "Unknown"
    };
  });
  
  console.log(employeeDepartments);*/

  // using find method 
 /*const combinedData = employees.forEach(employee => {
    const dept = department.find(d => d.id === employee.departmentId);
    return {
      employee,
      departmentName: dept?.name,
      location: dept?.location,
      skillsOrRewards: dept?.skills || dept?.rewards
    };
  });
  
  console.log(combinedData);*/



// using the for each method
console.log("USING FOR EACH METHOD :")
  employees.forEach(emp => {
    department.forEach(dept => {
      if (emp.departmentId === dept.id) {
        console.log(`Employee ID: ${emp.empid}, Department: ${dept.name}`);
      }
    });
  });

  // using for loop condition 
console.log("USING FOR LOOP CONDITION :");
  for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < department.length; j++) {
      if (employees[i].departmentId === department[j].id) {
        console.log(`Employee ID: ${employees[i].empid}, Department: ${department[j].name}`);
      }
    }
  }
  
  


