"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const rest_2 = require("@loopback/rest");
const rest_3 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ListUserController = class ListUserController {
    constructor(listUserRepository, response) {
        this.listUserRepository = listUserRepository;
        this.response = response;
    }
    async create(listUser) {
        let username = listUser.username;
        let role = listUser.role;
        const nameAlreadyExist = await this.listUserRepository.find({ where: { username } });
        if (nameAlreadyExist.length) {
            throw new rest_1.HttpErrors.UnprocessableEntity('Name already exist');
        }
        if (role !== 'Admin' && role !== 'User') {
            throw new rest_1.HttpErrors.UnprocessableEntity('invalid role');
        }
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
        let username = listUser.username;
        let role = listUser.role;
        const data = await this.listUserRepository.findById(listUser.id);
        if (username == data.username) {
            if (role !== 'Admin' && role !== 'User') {
                throw new rest_1.HttpErrors.UnprocessableEntity('invalid role');
            }
        }
        else {
            const nameAlreadyExist = await this.listUserRepository.find({ where: { username } });
            if (nameAlreadyExist.length) {
                throw new rest_1.HttpErrors.UnprocessableEntity('Name already exist');
            }
            if (role !== 'Admin' && role !== 'User') {
                throw new rest_1.HttpErrors.UnprocessableEntity('invalid role');
            }
        }
        return this.listUserRepository.replaceById(id, listUser);
    }
    async deleteById(id) {
        await this.listUserRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_2.post)('/users'),
    (0, rest_2.response)(200, {
        description: 'ListUser model instance',
        content: { 'application/json': { schema: (0, rest_2.getModelSchemaRef)(models_1.ListUser) } },
    }),
    tslib_1.__param(0, (0, rest_2.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_2.getModelSchemaRef)(models_1.ListUser, {
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
    (0, rest_2.get)('/users/count'),
    (0, rest_2.response)(200, {
        description: 'ListUser model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_2.param.where(models_1.ListUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_2.get)('/users'),
    (0, rest_2.response)(200, {
        description: 'Array of ListUser model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_2.getModelSchemaRef)(models_1.ListUser, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_2.param.filter(models_1.ListUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_2.patch)('/users'),
    (0, rest_2.response)(200, {
        description: 'ListUser PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_2.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_2.getModelSchemaRef)(models_1.ListUser, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_2.param.where(models_1.ListUser)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ListUser, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_2.get)('/users/{id}'),
    (0, rest_2.response)(200, {
        description: 'ListUser model instance',
        content: {
            'application/json': {
                schema: (0, rest_2.getModelSchemaRef)(models_1.ListUser, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_2.param.path.string('id')),
    tslib_1.__param(1, rest_2.param.filter(models_1.ListUser, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_2.patch)('/users/{id}'),
    (0, rest_2.response)(204, {
        description: 'ListUser PATCH success',
    }),
    tslib_1.__param(0, rest_2.param.path.string('id')),
    tslib_1.__param(1, (0, rest_2.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_2.getModelSchemaRef)(models_1.ListUser, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ListUser]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_2.put)('/users/{id}'),
    (0, rest_2.response)(204, {
        description: 'ListUser PUT success',
    }),
    tslib_1.__param(0, rest_2.param.path.string('id')),
    tslib_1.__param(1, (0, rest_2.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ListUser]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_2.del)('/users/{id}'),
    (0, rest_2.response)(204, {
        description: 'ListUser DELETE success',
    }),
    tslib_1.__param(0, rest_2.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ListUserController.prototype, "deleteById", null);
ListUserController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ListUserRepository)),
    tslib_1.__param(1, (0, core_1.inject)(rest_3.RestBindings.Http.RESPONSE)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ListUserRepository, Object])
], ListUserController);
exports.ListUserController = ListUserController;
//# sourceMappingURL=list-user.controller.js.map