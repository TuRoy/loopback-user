"use strict";
var ValidateUsersInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateUsersInterceptor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const repositories_1 = require("../repositories");
/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
let ValidateUsersInterceptor = ValidateUsersInterceptor_1 = class ValidateUsersInterceptor {
    constructor(listUserRepository) {
        this.listUserRepository = listUserRepository;
    }
    /**
     * This method is used by LoopBack context to produce an interceptor function
     * for the binding.
     *
     * @returns An interceptor function
     */
    value() {
        return this.intercept.bind(this);
    }
    /**
     * The logic to intercept an invocation
     * @param invocationCtx - Invocation context
     * @param next - A function to invoke next interceptor or the target method
     */
    async intercept(invocationCtx, next) {
        try {
            // Add pre-invocation logic here
            if (invocationCtx.methodName === 'create') {
                ;
                const { username } = invocationCtx.args[0];
                const { role } = invocationCtx.args[0];
                const nameAlreadyExist = await this.listUserRepository.find({ where: { username } });
                if (nameAlreadyExist.length) {
                    throw new rest_1.HttpErrors.UnprocessableEntity('Name already exist');
                }
                if (role !== 'Admin' && role !== 'User') {
                    throw new rest_1.HttpErrors.UnprocessableEntity('invalid role');
                }
            }
            const result = await next();
            // Add post-invocation logic here
            return result;
        }
        catch (err) {
            // Add error handling logic here
            throw err;
        }
    }
};
ValidateUsersInterceptor.BINDING_KEY = `interceptors.${ValidateUsersInterceptor_1.name}`;
ValidateUsersInterceptor = ValidateUsersInterceptor_1 = tslib_1.__decorate([
    (0, core_1.injectable)({ tags: { key: ValidateUsersInterceptor_1.BINDING_KEY } }),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ListUserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ListUserRepository])
], ValidateUsersInterceptor);
exports.ValidateUsersInterceptor = ValidateUsersInterceptor;
//# sourceMappingURL=validate-users.interceptor.js.map