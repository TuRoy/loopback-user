import { Getter } from '@loopback/core';
import { DefaultCrudRepository, juggler, HasManyRepositoryFactory } from '@loopback/repository';
import { Company, CompanyRelations, ListUser } from '../models';
import { ListUserRepository } from './list-user.repository';
export declare class CompanyRepository extends DefaultCrudRepository<Company, typeof Company.prototype.id, CompanyRelations> {
    protected db: juggler.DataSource;
    readonly listuser: HasManyRepositoryFactory<ListUser, typeof Company.prototype.id>;
    constructor(db: juggler.DataSource, listuserRepositoryGetter: Getter<ListUserRepository>);
}
