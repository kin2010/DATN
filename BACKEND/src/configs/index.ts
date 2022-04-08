import dotenv from 'dotenv';

dotenv.config();

const { HOSTNAME, PORT, DB_URI, JWT_PRIVATE_KEY } = process.env;
console.log(DB_URI, process.env);
const SERVER_HOSTNAME = HOSTNAME || 'localhost';
const SERVER_PORT = PORT || 3002;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

export default {
  server: SERVER,
  dbUri: DB_URI || 'mongodb://localhost:27017/doantn',
  bcryptSaltRounds: 10,
  jwtPrivateKey: JWT_PRIVATE_KEY || 'doantn@',
};
