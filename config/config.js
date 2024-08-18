const config = {
  development: {
    username: 'root',
    password: '12345',  
    database: 'api_projeto',
    host: '127.0.0.1',  
    dialect: 'mariadb'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mariadb'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mariadb'
  }
};

module.exports = config;
