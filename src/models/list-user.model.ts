import {belongsTo, Entity, model, property} from '@loopback/repository';
import { Company } from './company.model';

@model({settings: {strict: false}})
export class ListUser extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
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
  companyId: number

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ListUser>) {
    super(data);
  }
}

export interface ListUserRelations {
  // describe navigational properties here
}

export type ListUserWithRelations = ListUser & ListUserRelations;
