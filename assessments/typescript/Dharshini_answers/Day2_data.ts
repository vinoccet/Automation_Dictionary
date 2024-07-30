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

interface empThenDept {
    getEmpIdAndDeptName(): void;
    getFirstNameAndDeptName(): void;
}

interface deptThenEmp {
    getFirstNamePostAndDeptName(): void;
    getEmpNameDeptCivil(): void;

}

export class part1 implements empThenDept {
    public getEmpIdAndDeptName(): void {
        department.map(dept => {
            console.log(`EmpId: ${dept.id} works for the ${dept.name.toUpperCase()} Department`);
        })
        console.log('*****************************************');
    }
    public getFirstNameAndDeptName(): void {
        employees.map(employee => {
            let firstName = employee.name.split(" ");
            let deptId = employee.departmentId;
            department.map(dept => {
                if (dept.id == deptId) {
                    console.log(`Employee ${firstName[0].toUpperCase()} belongs to the Department ${dept.name.toUpperCase()}`);
                }
            })
        })
        console.log('*****************************************');
    }
}

export class part2 implements deptThenEmp {
    public getFirstNamePostAndDeptName(): void {
        employees.map(employee => {
            let pos = employee.position
            let firstName: string[] = employee.name.split(" ");
            let deptId = employee.departmentId;
            department.map(dept => {
                if (deptId == dept.id) {
                    console.log(`Employee ${firstName[0].toUpperCase()} is working as a ${pos.toUpperCase()} belongs to department ${dept.name.toUpperCase()}`);
                }
            })
        })
        console.log('*****************************************');
    }

    public getEmpNameDeptCivil(): void {
        department.filter(dept => {
            if (dept.skills?.name == "civil engineering") {
                employees.map(employee => {
                    if (employee.departmentId == dept.id) {
                        console.log(`Employee ${employee.name.toUpperCase()} from department ${dept.name.toUpperCase()} has the skill ${dept.skills?.name.toUpperCase()}`);
                    }
                })
            }
        })
    }
}