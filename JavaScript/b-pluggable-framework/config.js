'use strict';

module.exports = {
  static: {
    port: 8000,
  },
  api: {
    port: 8001,
    transport: 'ws', // http or ws
    framework: 'express', // express or null
  },
  sandbox: {
    timeout: 5000,
    displayErrors: false,
  },
  db: {
    host: '127.0.0.1',
    port: 5432,
    database: 'example',
    user: 'marcus',
    password: 'marcus',
  },
};
