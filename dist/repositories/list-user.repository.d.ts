import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { ListUser, ListUserRelations } from '../models';
export declare class ListUserRepository extends DefaultCrudRepository<ListUser, typeof ListUser.prototype.id, ListUserRelations> {
    constructor(dataSource: DbDataSource);
}
