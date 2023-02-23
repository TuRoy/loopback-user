"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let ListUserRepository = class ListUserRepository extends repository_1.DefaultCrudRepository {
    constructor(db, companyRepositoryGetter) {
        super(models_1.ListUser, db);
        this.db = db;
        this.company = this.createBelongsToAccessorFor('company', companyRepositoryGetter);
        this.registerInclusionResolver('company', this.company.inclusionResolver);
    }
};
ListUserRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('CompanyRepository')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource, Function])
], ListUserRepository);
exports.ListUserRepository = ListUserRepository;
//# sourceMappingURL=list-user.repository.js.map