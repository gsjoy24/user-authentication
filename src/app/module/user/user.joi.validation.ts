import Joi from 'joi';
export const productValidationSchema = Joi.object({
  productName: Joi.string().required().max(50).trim().messages({
    'string.base': 'First name must be a string',
    'string.empty': 'First name cannot be empty',
    'string.max': 'First name cannot exceed {#limit} characters',
  }),
  price: Joi.number().required().messages({
    'number.base': 'Price must be a number',
    'number.empty': 'Price cannot be empty',
    'any.required': 'Price is required',
  }),
  quantity: Joi.number().required().messages({
    'number.base': 'Quantity must be a number',
    'number.empty': 'Price cannot be empty',
    'any.required': 'Quantity is required',
  }),
});

export const userValidationSchema = {
  userId: Joi.number().required().messages({
    'string.base': 'User id must be a number',
    'string.empty': 'User id cannot be empty',
    'any.required': 'User id is required',
  }),
  username: Joi.string().required().max(20).trim().messages({
    'string.base': 'Username must be a string',
    'string.empty': 'Username cannot be empty',
    'string.max': 'Username cannot exceed {#limit} characters',
    'any.required': 'Username is required',
  }),
  password: Joi.string().required().max(20).trim().messages({
    'string.base': 'Password must be a string',
    'string.empty': 'Password cannot be empty',
    'string.max': 'Password cannot exceed {#limit} characters',
    'any.required': 'Password is required',
  }),
  fullName: {
    firstName: Joi.string().required().max(20).trim().messages({
      'string.base': 'First name must be a string',
      'string.empty': 'First name cannot be empty',
      'string.max': 'First name cannot exceed {#limit} characters',
      'any.required': 'First name is required',
    }),
    lastName: Joi.string().required().max(20).trim().messages({
      'string.base': 'Last name must be a string',
      'string.empty': 'Last name cannot be empty',
      'string.max': 'Last name cannot exceed {#limit} characters',
      'any.required': 'Last name is required',
    }),
  },
  age: Joi.number().required().messages({
    'string.base': 'Age must be a number',
    'string.empty': 'Age cannot be empty',
    'any.required': 'Age is required',
  }),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  isActive: Joi.boolean().required().messages({
    'boolean.base': 'IsActive must be true or false',
    'any.required': 'IsActive is required',
  }),
  hobbies: Joi.array()
    .items(Joi.string().trim()) // Assuming hobbies are strings
    .required()
    .messages({
      'array.base': 'Hobbies must be an array',
      'any.required': 'Hobbies are required',
    }),
  address: Joi.object({
    street: Joi.string().required().trim().messages({
      'string.base': 'Street must be a string',
      'any.required': 'Street is required',
      'string.empty': 'Street cannot be empty',
    }),
    city: Joi.string().required().trim().messages({
      'string.base': 'City must be a string',
      'any.required': 'City is required',
      'string.empty': 'City cannot be empty',
    }),
    country: Joi.string().required().trim().messages({
      'string.base': 'Country must be a string',
      'any.required': 'Country is required',
      'string.empty': 'Country cannot be empty',
    }),
  }).required(),
  orders: productValidationSchema,
};
