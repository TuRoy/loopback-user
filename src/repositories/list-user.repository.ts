import { inject, Getter } from '@loopback/core';
import {
  DefaultCrudRepository,
  juggler,
  repository,
  BelongsToAccessor,
} from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Company, ListUser, ListUserRelations } from '../models';
import { CompanyRepository } from './company.repository';

export class ListUserRepository extends DefaultCrudRepository<
  ListUser,
  typeof ListUser.prototype.id,
  ListUserRelations
> {
  public readonly company: BelongsToAccessor<
    Company,
    typeof ListUser.prototype.id
  >;
  constructor(
    @inject('datasources.db') protected db: juggler.DataSource,
    @repository.getter('CompanyRepository')
    companyRepositoryGetter: Getter<CompanyRepository>,

  ) {
    super(ListUser, db);
    this.company = this.createBelongsToAccessorFor(
      'company',
      companyRepositoryGetter
    )
    this.registerInclusionResolver('company', this.company.inclusionResolver);

  }
}
