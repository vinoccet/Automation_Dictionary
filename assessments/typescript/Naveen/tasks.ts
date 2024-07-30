export interface Q1_Q2 {
  getAllEmpId(): void;
  getFirstName(): void;
}

export interface Q3_Q4 {
  getPosition(): void;
  getCivilEmpName(): void;
}

const Department = [
  {
    id: 1,
    name: "Human Resources",
    location: "Building A",
    skills: {
      name: "communication",
      proficiency: "100",
    },
  },
  {
    id: 2,
    name: "Engineering",
    location: "Building B",
    skills: {
      name: "civil engineering",
      proficiency: "50",
    },
  },
  {
    id: 3,
    name: "Marketing",
    location: "Building C",
    rewards: {
      name: "MBA in marketing",
      points: "10",
    },
  },
];

const Employee = [
  {
    empid: 101,
    name: "Alice Johnson",
    departmentId: 1,
    position: "HR Manager",
  },
  {
    empid: 102,
    name: "Bob Smith",
    departmentId: 2,
    position: "Software Engineer",
  },
  {
    empid: 103,
    name: "Charlie Brown",
    departmentId: 3,
    position: "Marketing Specialist",
  },
];

export class get_Q1_Q2_Details implements Q1_Q2 {
  getAllEmpId() {
    return Employee.map((emp) => {
      const deptName = Department.find((dept) => dept.id === emp.departmentId);
      if (deptName)
        console.log(
          `Employee id: ${emp.empid}, its department name is ${deptName.name}`
        );
    });
  }
  getFirstName() {
    return Employee.map((emp) => {
      const fName = emp.name.split(" ")[0];
      const Deptname = Department.find((dept) => dept.id === emp.departmentId);
      if (Deptname)
        console.log(
          `Firstname of emp id:${emp.empid} is ${fName} and its respective department name is ${Deptname.name}`
        );
    });
  }
}

export class get_Q3_Q4_details implements Q3_Q4 {
  getPosition() {
    return Employee.map((emp) => {
      const fName = emp.name.split(" ")[0];
      const DeptName = Department.find((dept) => dept.id === emp.departmentId);
      if (DeptName)
        console.log(
          `Positions of ${fName} in ${DeptName.name} department is ${emp.position}`
        );
    });
  }
  getCivilEmpName() {
    return Employee.map((emp) => {
      const civilName = Department.find(
        (dept) =>
          dept.id === emp.departmentId &&
          dept.skills?.name === "civil engineering"
      );
      if (civilName)
        console.log(
          `${emp.name} has ${civilName.skills?.name} skill and his department name is ${civilName.name}`
        );
    });
  }
}
