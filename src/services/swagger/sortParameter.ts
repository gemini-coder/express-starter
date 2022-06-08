export const swSortParameters = {
  'in': 'query',
  'name': 'sort',
  'schema': {
    'type': 'object',
    'properties': {
      'sort_field': {
        'type': 'string',
      },
      'sort_way': {
        'type': 'string',
        'enum': ['asc', 'desc'],
      },
    },
  },
  'description': 'Sort by a particular field',
};
