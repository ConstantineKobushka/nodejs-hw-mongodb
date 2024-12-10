import dotenv from 'dotenv';
dotenv.config({ path: '.env.example' });

export const getEnvVar = (name, defaultValue) => {
  const value = process.env[name];

  if (value) return value;
  if (defaultValue) return defaultValue;

  throw new Error(`Missing ${name} enviroment variable`);
};
