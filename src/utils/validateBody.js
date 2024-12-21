import createError from 'http-errors';

// import { contactAddSchema } from '../validation/contacts.js';

export const validateBody = (schema) => {
  const func = async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      next(createError(400, error.message));
    }
  };
  return func;
};
