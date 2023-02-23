import { inject, Getter } from '@loopback/core';
import {
  DefaultCrudRepository,
  juggler,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Company, CompanyRelations, ListUser } from '../models';
import { ListUserRepository } from './list-user.repository';

export class CompanyRepository extends DefaultCrudRepository<
  Company,
  typeof Company.prototype.id,
  CompanyRelations
> {
  public readonly listuser: HasManyRepositoryFactory<
  ListUser,
  typeof Company.prototype.id
>;
  constructor(
    @inject('datasources.db')  protected db: juggler.DataSource,
    @repository.getter('ListUserRepository')
    listuserRepositoryGetter: Getter<ListUserRepository>,
  ) {
    super(Company, db);
    this.listuser = this.createHasManyRepositoryFactoryFor(
      'listuser',
      listuserRepositoryGetter,
    );
    this.registerInclusionResolver('listuser', this.listuser.inclusionResolver);

  }
}
