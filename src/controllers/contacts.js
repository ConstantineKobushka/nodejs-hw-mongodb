import createError from 'http-errors';

import * as contactServices from '../services/contacts.js';

export const getHomePageController = (req, res) => {
  res.send('<h1>Home Page</h1>');
};

export const getContactsController = async (req, res) => {
  const data = await contactServices.getContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactsByIdController = async (req, res) => {
  const { id } = req.params;
  const contact = await contactServices.getContactById(id);

  if (!contact) {
    throw createError(404, `Contact with id=${id} not found`);
    // const error = new Error(`Contact with id=${id} not found`);
    // error.status = 404;
    // throw error;
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id=${id}!`,
    data: contact,
  });
};

export const addContactController = async (req, res) => {
  const contact = await contactServices.addContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: contact,
  });
};

export const upsertContactController = async (req, res) => {
  const { id } = req.params;
  const { isNew, data } = await contactServices.updateContact(id, req.body, {
    upsert: true,
  });

  const status = isNew ? 201 : 200;

  res.status(status).json({
    status,
    massage: 'Successfully upserte contact',
    data,
  });
};

export const patchContactController = async (req, res) => {
  const { id } = req.params;
  const contact = await contactServices.updateContact(id, req.body);

  if (!contact) {
    throw createError(404, `Contact with id=${id} not found`);
  }

  res.json({
    status: 200,
    massage: 'Successfully upserte contact',
    data: contact.data,
  });
};

export const deleteContactController = async (req, res) => {
  // const contact = await contactServices.deleteContact(req.params.id);

  const { id } = req.params;
  const contact = await contactServices.deleteContact({ _id: id });

  if (!contact) {
    // throw createError(404, `Contact not found`);
    throw createError(404, `Contact with id=${id} not found`);
  }

  res.sendStatus(204);
};