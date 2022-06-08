//* Copyright Jamie Williams 2022 */

import swErrorSchema from '../../interfaces/error.schema';

export const swErrorReturn = {
  '400': {
    'description': 'Error response',
    'content': {
      'application/json': {
        'schema': {
          ...swErrorSchema,
        },
      },
    },
  },
  '403': {
    'description': 'Error response',
    'content': {
      'application/json': {
        'schema': {
          ...swErrorSchema,
        },
      },
    },
  },
};
