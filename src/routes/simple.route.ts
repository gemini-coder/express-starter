import swSimpleSchema from '../interfaces/simple.schema';
import {SimpleService} from '../services/simple.service';
import {SwaggerService} from '../services/swagger/swagger.service';

const swaggerService = new SwaggerService();
swaggerService.summary = 'Simple get route';
swaggerService.tags = ['Jamie\'s Routes'];
swaggerService.success_response = swSimpleSchema;
swaggerService.security = true;
export const swGetSimpleRoute = swaggerService.generateSwagger();

export const getSimpleRoute = async (req, res) => {
  new SimpleService().get()
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(400);
      });
};
