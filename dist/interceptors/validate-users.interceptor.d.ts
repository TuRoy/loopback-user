import { Interceptor, InvocationContext, InvocationResult, Provider, ValueOrPromise } from '@loopback/core';
import { ListUserRepository } from '../repositories';
/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
export declare class ValidateUsersInterceptor implements Provider<Interceptor> {
    listUserRepository: ListUserRepository;
    static readonly BINDING_KEY: string;
    constructor(listUserRepository: ListUserRepository);
    /**
     * This method is used by LoopBack context to produce an interceptor function
     * for the binding.
     *
     * @returns An interceptor function
     */
    value(): (invocationCtx: InvocationContext, next: () => any) => Promise<any>;
    /**
     * The logic to intercept an invocation
     * @param invocationCtx - Invocation context
     * @param next - A function to invoke next interceptor or the target method
     */
    intercept(invocationCtx: InvocationContext, next: () => ValueOrPromise<InvocationResult>): Promise<any>;
}
