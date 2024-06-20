const Joi = require('joi');

const bookSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'Title is required.',
    'string.base': 'Title count must be a string.',
    'string.empty': 'Title cannot be empty.',
  }),
  pageCount: Joi.number().integer().min(1).max(9999).required().messages({
    'any.required': 'Page count is required.',
    'number.base': 'Page count must be a number.',
    'number.integer': 'Page count must be an integer.',
    'number.min': 'Page count must be at least 1 page.',
    'number.max': 'Page count cannot be more than 9999 pages.',
  }),
  publishedDate: Joi.object({
    date: Joi.date().iso().required().messages({
      'any.required': 'Published date is required.',
      'date.base': 'Invalid published DATE format.',
      'date.iso': 'Published date must be in ISO format.',
    }),
  }),
  thumbnailUrl: Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .required()
    .messages({
      'any.required': 'Thumbnail URL is required.',
      'string.uri': 'Thumbnail URL must be a valid URL.',
      'string.uriCustomScheme':
        'Thumbnail URL must start with http:// or https://.',
    }),
  shortDescription: Joi.string().min(1).max(50).required().messages({
    'any.required': 'Short description is required.',
    'string.base': 'Title count must be a string.',
    'string.empty': 'Short description cannot be empty.',
    'string.min': 'Short description must be at least {#limit} characters.',
    'string.max': 'Short description cannot exceed {#limit} characters.',
  }),
  longDescription: Joi.string().min(1).max(300).required().messages({
    'any.required': 'Long description is required.',
    'string.base': 'Title count must be a string.',
    'string.empty': 'Long description cannot be empty.',
    'string.min': 'Long description must be at least {#limit} characters.',
    'string.max': 'Long description cannot exceed {#limit} characters.',
  }),
  status: Joi.string()
    .valid('PUBLISH', 'DRAFT', 'REMOVED')
    .default('PUBLISH')
    .messages({
      'any.only': 'Status must be one of "PUBLISH", "DRAFT", or "REMOVED".',
      'string.empty': 'Status cannot be empty.',
    }),
  authors: Joi.array().items(Joi.string()).min(1).required().messages({
    'any.required': 'At least one author is required.',
    'array.min': 'At least one author is required.',
  }),
});

module.exports = { bookSchema };
