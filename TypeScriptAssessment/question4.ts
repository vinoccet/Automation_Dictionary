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



// get the employee name and department name who got civil engineering skill


// using the find method
/*const civilEngineeringDept = department.find(dept => dept.skills?.name === "civil engineering");

if (civilEngineeringDept) {
  const employee = employees.find(emp => emp.departmentId === civilEngineeringDept.id);
  if (employee) {
    console.log(`Employee Name: ${employee.name}, Department Name: ${civilEngineeringDept.name}`);
  } else {
    console.log("No employee found in the department with civil engineering skill.");
  }
}*/

// using for loop 

for (let i = 0; i < department.length; i++) {
    if (department[i].skills && department[i].skills?.name === "civil engineering") {
      for (let j = 0; j < employees.length; j++) {
        if (employees[j].departmentId === department[i].id) {
          console.log(`Employee Name: ${employees[j].name}, Department: ${department[i].name}`);
        }
      }
    }
  }

  // USING FOR EACH METHOD 
  console.log("USING FOR EACH METHOD ")

  department.forEach(dept => {
    if (dept.skills && dept.skills.name === "civil engineering") {
      employees.forEach(emp => {
        if (emp.departmentId === dept.id) {
          console.log(`Employee Name: ${emp.name}, Department: ${dept.name}`);
        }
      });
    }
  });
  