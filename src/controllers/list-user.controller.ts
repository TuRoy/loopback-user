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
import {ListUser} from '../models';
import {ListUserRepository} from '../repositories';

export class ListUserController {
  constructor(
    @repository(ListUserRepository)
    public listUserRepository : ListUserRepository,
  ) {}

  @post('/list-users')
  @response(200, {
    description: 'ListUser model instance',
    content: {'application/json': {schema: getModelSchemaRef(ListUser)}},
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

  @get('/list-users/count')
  @response(200, {
    description: 'ListUser model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListUser) where?: Where<ListUser>,
  ): Promise<Count> {
    return this.listUserRepository.count(where);
  }

  @get('/list-users')
  @response(200, {
    description: 'Array of ListUser model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListUser, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListUser) filter?: Filter<ListUser>,
  ): Promise<ListUser[]> {
    return this.listUserRepository.find(filter);
  }

  @patch('/list-users')
  @response(200, {
    description: 'ListUser PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListUser, {partial: true}),
        },
      },
    })
    listUser: ListUser,
    @param.where(ListUser) where?: Where<ListUser>,
  ): Promise<Count> {
    return this.listUserRepository.updateAll(listUser, where);
  }

  @get('/list-users/{id}')
  @response(200, {
    description: 'ListUser model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListUser, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListUser, {exclude: 'where'}) filter?: FilterExcludingWhere<ListUser>
  ): Promise<ListUser> {
    return this.listUserRepository.findById(id, filter);
  }

  @patch('/list-users/{id}')
  @response(204, {
    description: 'ListUser PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListUser, {partial: true}),
        },
      },
    })
    listUser: ListUser,
  ): Promise<void> {
    await this.listUserRepository.updateById(id, listUser);
  }

  @put('/list-users/{id}')
  @response(204, {
    description: 'ListUser PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listUser: ListUser,
  ): Promise<void> {
    await this.listUserRepository.replaceById(id, listUser);
  }

  @del('/list-users/{id}')
  @response(204, {
    description: 'ListUser DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listUserRepository.deleteById(id);
  }
}
