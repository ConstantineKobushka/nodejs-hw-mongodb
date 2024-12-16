import createError from 'http-errors';

import * as contactServices from '../services/contacts.js';

export const getHomePage = (req, res) => {
  res.send('<h1>Home Page</h1>');
};

export const getContacts = async (req, res) => {
  const data = await contactServices.getContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactsById = async (req, res) => {
  const { id } = req.params;
  const data = await contactServices.getContactById(id);

  if (!data) {
    throw createError(404, `Contact with id=${id} not found`);
    // const error = new Error(`Contact with id=${id} not found`);
    // error.status = 404;
    // throw error;
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id=${id}!`,
    data,
  });
};
