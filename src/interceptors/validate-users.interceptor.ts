import {
  /* inject, */
  injectable,
  Interceptor,
  InvocationContext,
  InvocationResult,
  Provider,
  ValueOrPromise,
} from '@loopback/core';
import { repository } from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import { ListUserRepository } from '../repositories';
/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
@injectable({tags: {key: ValidateUsersInterceptor.BINDING_KEY}})
export class ValidateUsersInterceptor implements Provider<Interceptor> {
  static readonly BINDING_KEY = `interceptors.${ValidateUsersInterceptor.name}`;

  constructor(
    @repository(ListUserRepository)
    public listUserRepository : ListUserRepository
  ) {
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
  async intercept(
    invocationCtx: InvocationContext,
    next: () => ValueOrPromise<InvocationResult>,
  ) {
    try {
      // Add pre-invocation logic here
      if (invocationCtx.methodName === 'create') {;
        const {username} = invocationCtx.args[0];
        const {role} = invocationCtx.args[0];
        const nameAlreadyExist = await this.listUserRepository.find({where: {username}})
        if (nameAlreadyExist.length) {
          throw new HttpErrors.UnprocessableEntity(
            'Name already exist',
          );
        }
        if(role !== 'Admin' && role !== 'User'){
          throw new HttpErrors.UnprocessableEntity(
            'invalid role',
          );
        }
      }
      const result = await next();
      // Add post-invocation logic here
      return result;
    } catch (err) {
      // Add error handling logic here
      throw err;
    }
  }
}
