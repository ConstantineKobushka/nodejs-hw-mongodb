import { v2 as cloudinary } from 'cloudinary';

import { getEnvVar } from './getEnvVar.js';

const cloud_name = getEnvVar('CLOUDINARY_CLOUD_NAME');
const api_key = getEnvVar('CLOUDINARY_API_KEY');
const api_secret = getEnvVar('CLOUDINARY_API_SECRET');

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

export const deleteFileFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
    console.log(`File with publicId ${publicId} deleted from Cloudinary`);
  } catch (error) {
    console.error(`Failed to delete file with publicId ${publicId}`, error);
  }
};

// export const deleteFileFromCloudinary = async (publicId) => {
//   try {
//     const response = await cloudinary.uploader.destroy(publicId);
//     console.log('Cloudinary response:', response);
//     if (response.result === 'ok') {
//       console.log(`File with publicId ${publicId} successfully deleted.`);
//     } else {
//       console.error(
//         `Cloudinary failed to delete publicId ${publicId}:`,
//         response.result,
//       );
//     }
//   } catch (error) {
//     console.error(`Failed to delete file with publicId ${publicId}`, error);
//   }
// };
