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
    findById(id: string, filter?: FilterExcludingWhere<ListUser>): Promise<ListUser>;
    updateById(id: string, listUser: ListUser): Promise<void>;
    replaceById(id: string, listUser: ListUser): Promise<void>;
    deleteById(id: string): Promise<void>;
}
