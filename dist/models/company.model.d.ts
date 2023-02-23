import { Entity } from '@loopback/repository';
import { ListUser } from './list-user.model';
export declare class Company extends Entity {
    id?: number;
    name: string;
    listuser?: ListUser[];
    city: string;
    [prop: string]: any;
    constructor(data?: Partial<Company>);
}
export interface CompanyRelations {
}
export type CompanyWithRelations = Company & CompanyRelations;
