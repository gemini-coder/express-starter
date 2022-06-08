//* Copyright Jamie Williams 2022 */

import {swErrorReturn} from './errorReturn';
import {swPaginationParameters} from './paginationParameter';
import {swSortParameters} from './sortParameter';

export class SwaggerService {
  constructor() {}
  public summary: string = '';
  public tags: string[] = [];
  public description: string = null;
  public success_response: object = {};
  public request: object = null;
  public security: boolean = false;
  public parameters: {
    query?: {
      additional?: {name: string, type: string, description: string}[],
      sort?: boolean,
      pagination?: boolean,
    },
    path?: {name: string, type: string, description: string, required: boolean}[]
  } = {
      query: {
        sort: false,
        pagination: false,
      },
    };
  generateSwagger() {
    const result = {};
    result['summary'] = this.summary;
    result['tags'] = this.tags;
    this.description !== null ? result['description'] = this.description : '';
    if (this.request) {
      result['requestBody'] = {
        'content': {
          'application/json': {
            'schema': {
              ...this.request,
            },
          },
        },
      };
    }
    result['parameters'] = [];
    if (this.parameters.path) {
      this.parameters.path.forEach((element) => {
        result['parameters'].push({
          'in': 'path',
          'name': element.name,
          'schema': {
            'type': element.type,
          },
          'description': element.description,
          'required': element.required,
        });
      });
    }
    if (this.parameters?.query?.additional) {
      this.parameters.query.additional.forEach((element) => {
        result['parameters'].push({
          'in': 'query',
          'name': element.name,
          'schema': {
            'type': element.type,
          },
          'description': element.description,
        });
      });
    }
    this.parameters?.query?.sort ? result['parameters'].push(swSortParameters) : '';
    this.parameters?.query?.pagination ? result['parameters'].push(swPaginationParameters) : '';
    result['responses'] = {
      '200': {
        'description': 'Success response',
        'content': {
          'application/json': {
            'schema': {
              ...this.success_response,
            },
          },
        },
      },
      ...swErrorReturn,
    };
    this.security ? result['security'] = [
      {'bearerAuth': []},
    ] : '';
    return result;
  }
}
