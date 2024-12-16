// import express from 'express';
import { Router } from 'express';

import * as contactsController from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

// const app = express();
const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(contactsController.getHomePage));

contactsRouter.get('/contacts', ctrlWrapper(contactsController.getContacts));

contactsRouter.get(
  '/contacts/:id',
  ctrlWrapper(contactsController.getContactsById),
);

export default contactsRouter;
