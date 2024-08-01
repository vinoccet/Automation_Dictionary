import {Container} from 'inversify';
import { IDepartment } from '../Depart';
import { IEmployees } from '../Employee';
import { TYPES } from './Types';
import { Employee } from '../Employee';
import { Department } from '../Depart';
export const container=new Container();
container.bind<IEmployees>(TYPES.Employee).to(Employee);
container.bind<IDepartment>(TYPES.Department).to(Department);
 