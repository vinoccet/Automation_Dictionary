
export interface IEmployees {
    getallempid(): number[];
    getallfirstname(): string[];
    getallpositions(): string[];
    getfirstnamebyposition(emppos: string): string;

}

