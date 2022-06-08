const joi = require('joi');
const j2s = require('joi-to-swagger');

export const simpleSchema = joi.object().keys({
  name: joi.string()
})
export const swSimpleSchema = j2s(simpleSchema).swagger;
export default swSimpleSchema;
