import { employees } from "./data";
import { IEmployees } from "./employinterface";

export class Employeeclass implements IEmployees {
    getfirstnamebyposition(emppos: string): string {
        return employees.filter((emppos1) => emppos1.position === emppos).map((emppos1) => emppos1.name.split(" ")[0])[0];
    }

    getallempid(): number[] {
        return employees.map((employid) => employid.empid);

    }

    getallfirstname(): string[] {
        return employees.map((firstname) => firstname.name.split(" ")[0]);
    }
    getallpositions(): string[] {
        return employees.map((position1) => position1.position);
    }
}