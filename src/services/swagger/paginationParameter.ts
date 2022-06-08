export const swPaginationParameters = {
  'in': 'query',
  'name': 'pagination',
  'schema': {
    'type': 'object',
    'properties': {
      'page': {
        'type': 'integer',
        'example': 1,
      },
      'per_page': {
        'type': 'integer',
        'example': 100,
      },
    },
  },
  'description': 'Sort by a particular field',
};
