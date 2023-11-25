import Joi from 'joi';
export const productValidationSchema = Joi.object({
  productName: Joi.string().max(50).trim().required().messages({
    'string.base': 'Product name must be a string',
    'string.empty': 'Product name cannot be empty',
    'string.max': 'Product name cannot exceed {#limit} characters',
  }),
  price: Joi.number().required().messages({
    'number.base': 'Price must be a number',
    'number.empty': 'Price cannot be empty',
    'any.required': 'Price is required',
  }),
  quantity: Joi.number().required().messages({
    'number.base': 'Quantity must be a number',
    'number.empty': 'Quantity cannot be empty',
    'any.required': 'Quantity is required',
  }),
});

export const userValidationSchema = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': 'User id must be a number',
    'number.empty': 'User id cannot be empty',
    'any.required': 'User id is required',
  }),
  username: Joi.string().max(20).trim().required().messages({
    'string.base': 'Username must be a string',
    'string.empty': 'Username cannot be empty',
    'string.max': 'Username cannot exceed {#limit} characters',
    'any.required': 'Username is required',
  }),
  password: Joi.string().min(8).max(20).trim().messages({
    'string.base': 'Password must be a string',
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password length must be at least 8 characters long',
    'string.max': 'Password cannot exceed {#limit} characters',
    'any.required': 'Password is required',
  }),
  fullName: {
    firstName: Joi.string()
      .max(20)
      .pattern(/^[A-Z][a-z]*$/)
      .trim()
      .required()
      .messages({
        'string.base': 'First name must be a string',
        'string.empty': 'First name cannot be empty',
        'string.max': 'First name cannot exceed {#limit} characters',
        'string.pattern.base':
          'First name should start with a capital letter and contain only letters',
        'any.required': 'First name is required',
      }),
    lastName: Joi.string()
      .max(20)
      .pattern(/^[A-Z][a-z]*$/)
      .trim()
      .required()
      .messages({
        'string.base': 'Last name must be a string',
        'string.empty': 'Last name cannot be empty',
        'string.max': 'Last name cannot exceed {#limit} characters',
        'string.pattern.base':
          'First name should start with a capital letter and contain only letters',
        'any.required': 'Last name is required',
      }),
  },
  age: Joi.number().required().messages({
    'number.base': 'Age must be a number',
    'number.empty': 'Age cannot be empty',
    'any.required': 'Age is required',
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required()
    .messages({
      'string.base': 'Email must be a string',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email is not valid',
      'string.domain': 'Email domain is not valid',
      'string.minDomainSegments':
        'Email should have at least {#limit} domain segment(s)',
      'any.required': 'Email is required',
    }),
  isActive: Joi.boolean().required().messages({
    'boolean.base': 'Active status must be true or false',
    'any.required': 'Active status is required',
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
});
