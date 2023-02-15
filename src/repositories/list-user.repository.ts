import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ListUser, ListUserRelations} from '../models';

export class ListUserRepository extends DefaultCrudRepository<
  ListUser,
  typeof ListUser.prototype.id,
  ListUserRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ListUser, dataSource);
  }
}
