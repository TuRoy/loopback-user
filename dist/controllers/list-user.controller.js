"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ListUserController = class ListUserController {
    constructor(listUserRepository) {
        this.listUserRepository = listUserRepository;
    }
    async create(listUser) {
        return this.listUserRepository.create(listUser);
    }
    async count(where) {
        return this.listUserRepository.count(where);
    }
    async find(filter) {
        return this.listUserRepository.find(filter);
    }
    async updateAll(listUser, where) {
        return this.listUserRepository.updateAll(listUser, where);
    }
    async findById(id, filter) {
        return this.listUserRepository.findById(id, filter);
    }
    async updateById(id, listUser) {
        await this.listUserRepository.updateById(id, listUser);
    }
    async replaceById(id, listUser) {
        await this.listUserRepository.replaceById(id, listUser);
    }
    async deleteById(id) {
        await this.listUserRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/list-users'),
    (0, rest_1.response)(200, {
        description: 'ListUser model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ListUser) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ListUser, {
                    title: 'NewListUser',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/list-users/count'),
    (0, rest_1.response)(200, {
        description: 'ListUser model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ListUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/list-users'),
    (0, rest_1.response)(200, {
        description: 'Array of ListUser model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ListUser, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ListUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/list-users'),
    (0, rest_1.response)(200, {
        description: 'ListUser PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ListUser, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ListUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ListUser, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/list-users/{id}'),
    (0, rest_1.response)(200, {
        description: 'ListUser model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ListUser, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ListUser, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/list-users/{id}'),
    (0, rest_1.response)(204, {
        description: 'ListUser PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ListUser, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ListUser]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/list-users/{id}'),
    (0, rest_1.response)(204, {
        description: 'ListUser PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ListUser]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/list-users/{id}'),
    (0, rest_1.response)(204, {
        description: 'ListUser DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "deleteById", null);
ListUserController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ListUserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ListUserRepository])
], ListUserController);
exports.ListUserController = ListUserController;
//# sourceMappingURL=list-user.controller.js.map