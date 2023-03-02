"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUser = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const company_model_1 = require("./company.model");
let ListUser = class ListUser extends repository_1.Entity {
    constructor(data) {
        // if (data.role != Admin ) throw new Error('role is not a valid number')
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
], ListUser.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        index: {
            unique: true,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ListUser.prototype, "username", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ListUser.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ListUser.prototype, "birthday", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => company_model_1.Company),
    tslib_1.__metadata("design:type", String)
], ListUser.prototype, "companyId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ListUser.prototype, "role", void 0);
ListUser = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ListUser);
exports.ListUser = ListUser;
//# sourceMappingURL=list-user.model.js.map