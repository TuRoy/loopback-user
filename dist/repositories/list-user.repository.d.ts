import { Getter } from '@loopback/core';
import { DefaultCrudRepository, juggler, BelongsToAccessor } from '@loopback/repository';
import { Company, ListUser, ListUserRelations } from '../models';
import { CompanyRepository } from './company.repository';
export declare class ListUserRepository extends DefaultCrudRepository<ListUser, typeof ListUser.prototype.id, ListUserRelations> {
    protected db: juggler.DataSource;
    readonly company: BelongsToAccessor<Company, typeof ListUser.prototype.id>;
    constructor(db: juggler.DataSource, companyRepositoryGetter: Getter<CompanyRepository>);
}
