import { get_Q1_Q2_Details, get_Q3_Q4_details } from "./tasks";

const task1 = new get_Q1_Q2_Details();
const task2 = new get_Q3_Q4_details();
//Question 1
console.log("Question 1");
task1.getAllEmpId();

//Question 2
console.log("Question 2");
task1.getFirstName();

//Question 3
console.log("Question 3");
task2.getPosition();

//Question 4
console.log("Question 4");
task2.getCivilEmpName();
