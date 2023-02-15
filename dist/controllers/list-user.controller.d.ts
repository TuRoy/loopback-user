import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ListUser } from '../models';
import { ListUserRepository } from '../repositories';
export declare class ListUserController {
    listUserRepository: ListUserRepository;
    constructor(listUserRepository: ListUserRepository);
    create(listUser: Omit<ListUser, 'id'>): Promise<ListUser>;
    count(where?: Where<ListUser>): Promise<Count>;
    find(filter?: Filter<ListUser>): Promise<ListUser[]>;
    updateAll(listUser: ListUser, where?: Where<ListUser>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<ListUser>): Promise<ListUser>;
    updateById(id: number, listUser: ListUser): Promise<void>;
    replaceById(id: number, listUser: ListUser): Promise<void>;
    deleteById(id: number): Promise<void>;
}
