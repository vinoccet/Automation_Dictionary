import { Container } from 'inversify';
import 'reflect-metadata';
import { deptInterface, empInterface } from "./interfaces";
import { employeeclass } from "./employeeClass";
import { Department } from "./departmentClass";
import { TYPES } from './types';

export const container = new Container();
container.bind<empInterface>(TYPES.employeeclass).to(employeeclass);
container.bind<deptInterface>(TYPES.departmentClass).to(Department);
//container.bind<Util>(TYPES.UtilService).to(Util);
//export { container };