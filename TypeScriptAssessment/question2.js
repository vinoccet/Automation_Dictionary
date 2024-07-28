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
employees.forEach(function (employee) {
    var firstName = employee.name.split(" ")[0];
    var dept = department.find(function (d) { return d.id === employee.departmentId; });
    console.log("First Name: ".concat(firstName, ", Department: ").concat(dept === null || dept === void 0 ? void 0 : dept.name));
});
