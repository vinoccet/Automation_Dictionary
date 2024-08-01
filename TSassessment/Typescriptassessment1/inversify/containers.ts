import { Container } from 'inversify';
import 'reflect-metadata';
import { IEmployees } from '../employinterface';
import { IDepartment } from '../departinterface';
import { TYPES } from './types';
import { Employeeclass } from '../employclass';
import { DepartmentClass } from '../departclass';

export const container = new Container();
container.bind<IEmployees>(TYPES.Employeeclass).to(Employeeclass);
container.bind<IDepartment>(TYPES.Departmentclass).to(DepartmentClass);