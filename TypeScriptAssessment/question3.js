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
    var _a;
    var departmentName = (_a = department.find(function (dept) { return dept.id === employee.departmentId; })) === null || _a === void 0 ? void 0 : _a.name;
    var firstName = employee.name.split(" ")[0];
    console.log("Position: ".concat(employee.position, ", Department: ").concat(departmentName, ", First Name: ").concat(firstName));
});
