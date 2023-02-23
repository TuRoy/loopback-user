"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let CompanyRepository = class CompanyRepository extends repository_1.DefaultCrudRepository {
    constructor(db, listuserRepositoryGetter) {
        super(models_1.Company, db);
        this.db = db;
        this.listuser = this.createHasManyRepositoryFactoryFor('listuser', listuserRepositoryGetter);
        this.registerInclusionResolver('listuser', this.listuser.inclusionResolver);
    }
};
CompanyRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.db')),
    tslib_1.__param(1, repository_1.repository.getter('ListUserRepository')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource, Function])
], CompanyRepository);
exports.CompanyRepository = CompanyRepository;
//# sourceMappingURL=company.repository.js.map