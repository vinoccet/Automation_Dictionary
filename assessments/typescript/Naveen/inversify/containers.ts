import { Container } from "inversify";
import "reflect-metadata";
import { IDepartment, IEmployee } from "../interface";
import { CEmployee } from "../employee";
import { CDepartment } from "../department";
import { TYPES } from "./types";
export const container = new Container(); //container from inversify
container.bind<IEmployee>(TYPES.Employee).to(CEmployee); //types.employee from symbol, CEmployee from class
container.bind<IDepartment>(TYPES.Department).to(CDepartment); //IEmployee from interface
