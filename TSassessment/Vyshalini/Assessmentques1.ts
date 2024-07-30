const department = [
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
]

const employees = [
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





// prerequisites

// 1) the 2 entities should be mapped to interface, so 2 interfaces should be created

// 2) create 2 classes that implements these interfaces




//---------Question1------------------
// get all emp id and print the respective department name
department.forEach((depobject) => {
    employees.map((employobj) => {
        if (employobj.departmentId === depobject.id) {
            console.log(`${employobj.empid}: ${depobject.name}`);
        }
    })
})


//---------Question2------------------
// get all firstnmaes from emp loop and print the department names for respective first name
department.forEach((depname) => {
    employees.map((emname) => {
        if (emname.departmentId === depname.id) {
            console.log(`${(emname.name.split(" "))[0]}: ${depname.name}`);
        }
    })
})

//---------Question3------------------
// get all positions from emp loop and print the department names for respective first name
department.forEach((depname) => {
    employees.map((emname) => {
        let position = emname.position;
        if (emname.departmentId === depname.id) {
            console.log(`${(emname.name.split(" "))[0]}: ${position}: ${depname.name}`);
        }
    })
})

//---------Question4------------------
// get the employee name and department name who got civil engineering skill
department.forEach((depname) => {
    employees.map((emname) => {

        if ((emname.departmentId === depname.id) && ((depname.skills?.name) === "civil engineering")) {
            console.log(`${emname.name}: ${depname.name}`);
        }
    })
})

export { }