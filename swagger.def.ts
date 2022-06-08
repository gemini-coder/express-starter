import {swSimpleRouter} from './src/routes';

const swagger = {
  'openapi': '3.0.0',
  'info': {
    title: 'Simple API',
    version: '1.0.0',
    description: 'Simple api created by Jamie Williams',
  },
  'servers': [
    {
      url: 'http://localhost:3010',
      description: 'Server',
    },
  ],
  'paths': {
    ...swSimpleRouter,
  },
  'components': {
    'securitySchemes': {
      'bearerAuth': {
        'type': 'http',
        'scheme': 'bearer',
        'bearerFormat': 'JWT',
      },
    },
  },
};
export default swagger;
