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
// create a class that implements the departments Interface
var departmentClass = /** @class */ (function () {
    // Use constructor for declaring the  the parameters
    function departmentClass(id, name, location, skills, rewards) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.skills = skills;
        //this.rewards=rewards;
    }
    ;
    return departmentClass;
}());
// Create another class for implementing the employee interface
var employeeclass = /** @class */ (function () {
    // Create a constructor and declare all the parameters in to the constructor
    function employeeclass(empid, name, departmentId, position) {
        this.empid = empid;
        this.name = name;
        this.departmentId;
        this.position = position;
    }
    return employeeclass;
}());
var dp1 = new departmentClass(1, "Human Resources", "Building A", { name: "communication", proficiency: "100" }, { name: "MBA in marketing", points: "10" });
var dpc2 = new departmentClass(2, "Engineering", "Building B", { name: "Civil Engineering", proficiency: "50" });
var dpc3 = new departmentClass(3, "Marketing", "Building C", { name: "MBA in Marketing", proficiency: "10" });
console.log("The values of an first object of department array are:", dp1);
console.log("The values of an second object of department array are:", dpc2);
console.log("The values of an third object of department array are:", dpc3);
var empClass1 = new employeeclass(101, "Alice Johnson", 1, "HR Manager");
var empClass2 = new employeeclass(102, "Bob Smith", 2, "SoftWare Engineer");
var empClass3 = new employeeclass(103, "Charlie Brown", 3, "Marketing Specialist");
console.log("The details of first object from employees array", empClass1);
console.log("The details of Second object from employees array", empClass2);
console.log("The details of Third object from employees array", empClass3);
//get all emp id and print the respective department name
employees.forEach(function (emp) {
    department.forEach(function (dept) {
        if (emp.departmentId === dept.id) {
            console.log("Employee ID: ".concat(emp.empid, ", Department: ").concat(dept.name));
        }
    });
});
// get all firstnmaes from emp loop and print the department names for respective first name
employees.forEach(function (emp) {
    department.forEach(function (dept) {
        if (emp.departmentId === dept.id) {
            var firstName = emp.name.split(' ')[0];
            console.log("First Name: ".concat(firstName, ", Department: ").concat(dept.name));
        }
    });
});
// get all positions from emp loop and print the department names for respective first name
employees.forEach(function (emp) {
    department.forEach(function (dept) {
        if (emp.departmentId === dept.id) {
            var firstName = emp.name.split(' ')[0];
            console.log("Position: ".concat(emp.position, ", First Name: ").concat(firstName, ", Department: ").concat(dept.name));
        }
    });
});
// get the employee name and department name who got civil engineering skill
department.forEach(function (dept) {
    if (dept.skills && dept.skills.name === "civil engineering") {
        employees.forEach(function (emp) {
            if (emp.departmentId === dept.id) {
                console.log("Employee Name: ".concat(emp.name, ", Department: ").concat(dept.name));
            }
        });
    }
});
