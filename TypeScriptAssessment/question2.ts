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



  //get all firstnmaes from emp loop and print the department names for respective first name




// Using the find method

employees.forEach(employee => {
    const firstName = employee.name.split(" ")[0];
    const dept = department.find(d => d.id === employee.departmentId);
    console.log(`First Name: ${firstName}, Department: ${dept?.name}`);
  });

  // Using thr for each  method
console.log("USING FOR LOOP CONDITION :");

employees.forEach(emp => {
    for (let j = 0; j < department.length; j++) {
      if (emp.departmentId === department[j].id) {
        const firstName = emp.name.split(' ')[0];
        console.log(`First Name: ${firstName}, Department: ${department[j].name}`);
      }
    }
  });

  // using for loop method
  
  console.log("using for each method :");

  employees.forEach(emp => {
    department.forEach(dept => {
      if (emp.departmentId === dept.id) {
        const firstName = emp.name.split(' ')[0];
        console.log(`First Name: ${firstName}, Department: ${dept.name}`);
      }
    });
  });
  

  