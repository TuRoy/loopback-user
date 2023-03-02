import {belongsTo, Entity, model, property} from '@loopback/repository';
import { Company } from './company.model';

@model({settings: {strict: false}})
export class ListUser extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    index: {
      unique: true,
    },
  })
  username: string;


  @property({
    type: 'string',
    required: true,
  })
  address: string;


  @property({
    type: 'string',
    required: true,
  })
  birthday: string;

  @belongsTo(()=> Company )
  companyId: string

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  constructor(data: Partial<ListUser>) {
    // if (data.role != Admin ) throw new Error('role is not a valid number')
    super(data);
  }
}

export interface ListUserRelations {
  // describe navigational properties here
}

export type ListUserWithRelations = ListUser & ListUserRelations;
