import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    isFavourite: {
      type: Boolean,
      default: false,
      require: true,
    },
    contactType: {
      type: String,
      enum: ['personal', 'home', 'work'],
      default: 'personal',
      require: true,
    },
  },
  {
    timestamps: true, // Автоматично створює поля createdAt та updatedAt
  },
);

const ContactCollection = model('contact', contactSchema);

export default ContactCollection;
