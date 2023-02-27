"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const list_user_model_1 = require("./list-user.model");
let Company = class Company extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => list_user_model_1.ListUser, { keyTo: 'companyId' }),
    tslib_1.__metadata("design:type", Array)
], Company.prototype, "listuser", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "city", void 0);
Company = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Company);
exports.Company = Company;
//# sourceMappingURL=company.model.js.map