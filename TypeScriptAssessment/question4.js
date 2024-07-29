var _a;
var department = [
    {
        id: 1,
        name: "Human Resources",
        location: "Building A",
        skills: {
            name: "communication",
            proficiency: "100"
        }
    },
    {
        id: 2,
        name: "Engineering",
        location: "Building B",
        skills: {
            name: "civil engineering",
            proficiency: "50"
        }
    },
    {
        id: 3,
        name: "Marketing",
        location: "Building C",
        rewards: {
            name: "MBA in marketing",
            points: "10"
        }
    }
];
var employees = [
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
];
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
for (var i = 0; i < department.length; i++) {
    if (department[i].skills && ((_a = department[i].skills) === null || _a === void 0 ? void 0 : _a.name) === "civil engineering") {
        for (var j = 0; j < employees.length; j++) {
            if (employees[j].departmentId === department[i].id) {
                console.log("Employee Name: ".concat(employees[j].name, ", Department: ").concat(department[i].name));
            }
        }
    }
}
