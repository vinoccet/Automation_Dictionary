interface Department {
    getDepartmentnamebyempid(): void;
    getDepartmentnamebyfirstname(): void;
}
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
 
interface Employees {
    getpositionandprintdepname(): void;
    printempnameanddepnameofcivil(): void;
}
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
 
// get all emp id and print the respective department name
 
// get all firstnmaes from emp loop and print the department names for respective first name
 
// get all positions from emp loop and print the department names for respective first name
 
// get the employee name and department name who got civil engineering skill
 
export class Departmentclass implements Department {
    getDepartmentnamebyempid(): void {
        department.forEach((depobject) => {
            employees.map((employobj) => {
                if (employobj.departmentId === depobject.id) {
                    console.log(`${employobj.empid}: ${depobject.name}`);
                }
            })
        })
 
    }
    getDepartmentnamebyfirstname(): void {
        department.forEach((depobject) => {
            employees.map((employobj) => {
                if (employobj.departmentId === depobject.id) {
                    console.log(`${(employobj.name.split(" "))[0]}: ${depobject.name}`);
                }
            })
        })
 
    }
}
 
export class Employeeclass implements Employees {
    getpositionandprintdepname(): void {
        department.forEach((depobject) => {
            employees.map((employobj) => {
                let position = employobj.position;
                if (employobj.departmentId === depobject.id) {
                    console.log(`${(employobj.name.split(" "))[0]}: ${position}: ${depobject.name}`);
                }
            })
        })
    }
    printempnameanddepnameofcivil(): void {
        department.forEach((depobject) => {
            employees.map((employobj) => {
 
                if ((employobj.departmentId === depobject.id) && ((depobject.skills?.name) === "civil engineering")) {
                    console.log(`${employobj.name}: ${depobject.name}`);
                }
            })
        })
    }
}
 
 
 
 
 
//Another method
// interface Department {
//     id: number;
//     name: string;
//     location: string;
//     skills?: {
//         name: string;
//         proficiency: string;
//     }
//     rewards?: {
//         name: string;
//         points: string;
//     }
 
// }
// const department = [
//     {
//         id: 1,
//         name: "Human Resources",
//         location: "Building A",
//         skills: {
//             name: "communication",
//             proficiency: "100"
//         }
//     },
//     {
//         id: 2,
//         name: "Engineering",
//         location: "Building B",
//         skills: {
//             name: "civil engineering",
//             proficiency: "50"
//         }
 
//     },
//     {
//         id: 3,
//         name: "Marketing",
//         location: "Building C",
//         rewards: {
//             name: "MBA in marketing",
//             points: "10"
//         }
//     }
// ]
 
 
// interface Employees {
//     empid: number;
//     name: string;
//     deparmentId: number;
//     position: string;
// }
 
// const employees = [
//     {
//         empid: 101,
//         name: "Alice Johnson",
//         departmentId: 1,
//         position: "HR Manager"
//     },
//     {
//         empid: 102,
//         name: "Bob Smith",
//         departmentId: 2,
//         position: "Software Engineer"
//     },
//     {
//         empid: 103,
//         name: "Charlie Brown",
//         departmentId: 3,
//         position: "Marketing Specialist"
//     }
// ]
 
// class deptclass implements Department {
//     id: number;
//     name: string;
//     location: string;
//     skills?: {
//         name: string;
//         proficiency: string;
//     };
//     rewards?: {
//         name: string;
//         points: string;
//     };
//     constructor(id: number,
//         name: string,
//         location: string,
//         skills?: {
//             name: string;
//             proficiency: string;
//         },
//         rewards?: {
//             name: string;
//             points: string;
//         }) {
//         this.id = id;
//         this.name = name;
//         this.location = location;
//         this.skills = skills;
//         this.rewards = rewards;
//     }
// }
// const deparray: deptclass[] = [new deptclass(1, "Human Resources", "Building A", { name: "communication", proficiency: "100" }),
// new deptclass(2, "Engineering", "Building B", { name: "civil engineering", proficiency: "50" }),
// new deptclass(3, "Marketing", "Building C", undefined, { name: "MBA in marketing", points: "10" })];
 
 
 
// class employclass implements Employees {
//     empid: number;
//     name: string;
//     deparmentId: number;
//     position: string;
 
//     constructor(empid: number,
//         name: string,
//         deparmentId: number,
//         position: string) {
//         this.empid = empid;
//         this.name = name;
//         this.deparmentId = deparmentId;
//         this.position = position;
//     }
// }
// const emparray: employclass[] = [new employclass(101, "Alice Johnson", 1, "HR Manager"),
// new employclass(102, "Bob Smith", 2, "Software Engineer"),
// new employclass(103, "Charlie Brown", 3, "Marketing Specialist")];
 
 
// department.map((depobject) => {
//     employees.map((employobj) => {
//         if (employobj.departmentId === depobject.id) {
//             console.log(`${employobj.empid}: ${depobject.name}`);
//         }
//     })
// })
 
// department.forEach((depobject) => {
//     employees.map((employobj) => {
//         if (employobj.departmentId === depobject.id) {
//             console.log(`${(employobj.name.split(" "))[0]}: ${depobject.name}`);
//         }
//     })
// })
 
// department.forEach((depobject) => {
//     employees.map((employobj) => {
//         let position = employobj.position;
//         if (employobj.departmentId === depobject.id) {
//             console.log(`${(employobj.name.split(" "))[0]}: ${position}: ${depobject.name}`);
//         }
//     })
// })
 
// department.forEach((depobject) => {
//     employees.map((employobj) => {
 
//         if ((employobj.departmentId === depobject.id) && ((depobject.skills?.name) === "civil engineering")) {
//             console.log(`${employobj.name}: ${depobject.name}`);
//         }
//     })
// })