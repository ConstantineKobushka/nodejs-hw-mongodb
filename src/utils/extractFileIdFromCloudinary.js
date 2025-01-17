// export const extractFileIdFromCloudinary = (url) => {
//   const parts = url.split('/');
//   const fileName = parts[parts.length - 1];
//   return `avatars/${fileName.split('.')[0]}`;
// };

export const extractFileIdFromCloudinary = (url) => {
  const parts = url.split('/');
  const fileName = parts[parts.length - 1].split('.')[0];
  const folderName = parts[parts.length - 2];
  return `${folderName}/${fileName}`;
};
