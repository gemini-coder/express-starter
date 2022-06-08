//* Copyright Jamie Williams 2022 */

const joi = require('joi');
const j2s = require('joi-to-swagger');

// Schema
export const errorJoiSchema = joi.object().keys({
  status: joi.number().default(400),
  error_type: joi.string().description('Will return "validation", "unknown"'),
  response: joi.object().keys({
    error: joi.array().items(
        joi.string()).description('Will return an array of string messages'),
  }),
});

export const gulpSchema = j2s(errorJoiSchema).swagger;
// Swagger

export const swErrorSchema = j2s(errorJoiSchema).swagger;
export default swErrorSchema;
