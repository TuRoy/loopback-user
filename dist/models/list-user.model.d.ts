import { Entity } from '@loopback/repository';
export declare class ListUser extends Entity {
    id?: number;
    username: string;
    address: string;
    birthday: string;
    companyId: number;
    role: string;
    [prop: string]: any;
    constructor(data?: Partial<ListUser>);
}
export interface ListUserRelations {
}
export type ListUserWithRelations = ListUser & ListUserRelations;
