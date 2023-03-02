import { authenticate } from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import { ListUser } from '../models';
import { ListUserRepository } from '../repositories';
import { ValidateUsersInterceptor } from '../interceptors';
import { intercept } from '@loopback/context';

@authenticate('jwt')
export class ListUserController {
  constructor(
    @repository(ListUserRepository)
    public listUserRepository: ListUserRepository,
  ) { }

  @intercept(ValidateUsersInterceptor.BINDING_KEY)
  @post('/users')
  @response(200, {
    description: 'ListUser model instance',
    content: { 'application/json': { schema: getModelSchemaRef(ListUser) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListUser, {
            title: 'NewListUser',
            exclude: ['id'],
          }),
        },
      },
    })
    listUser: Omit<ListUser, 'id'>,
  ): Promise<ListUser> {
    return this.listUserRepository.create(listUser);
  }

  @get('/users/count')
  @response(200, {
    description: 'ListUser model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(ListUser) where?: Where<ListUser>,
  ): Promise<Count> {
    return this.listUserRepository.count(where);
  }

  @get('/users')
  @response(200, {
    description: 'Array of ListUser model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListUser, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(ListUser) filter?: Filter<ListUser>,
  ): Promise<ListUser[]> {
    return this.listUserRepository.find(filter);
  }

  @patch('/users')
  @response(200, {
    description: 'ListUser PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListUser, { partial: true }),
        },
      },
    })
    listUser: ListUser,
    @param.where(ListUser) where?: Where<ListUser>,
  ): Promise<Count> {
    return this.listUserRepository.updateAll(listUser, where);
  }

  @get('/users/{id}')
  @response(200, {
    description: 'ListUser model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListUser, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ListUser, { exclude: 'where' }) filter?: FilterExcludingWhere<ListUser>
  ): Promise<ListUser> {
    return this.listUserRepository.findById(id, filter);
  }

  @patch('/users/{id}')
  @response(204, {
    description: 'ListUser PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListUser, { partial: true }),
        },
      },
    })
    listUser: ListUser,
  ): Promise<void> {
    await this.listUserRepository.updateById(id, listUser);
  }

  @put('/users/{id}')
  @response(204, {
    description: 'ListUser PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() listUser: ListUser,
  ): Promise<void> {
    await this.listUserRepository.replaceById(id, listUser);
  }

  @del('/users/{id}')
  @response(204, {
    description: 'ListUser DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.listUserRepository.deleteById(id);
  }
}
