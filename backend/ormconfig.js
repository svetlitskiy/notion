const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

const options = {
  type: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['./src/**/entity/*.ts', './src/**/entity/*.js'],
  logging: process.env.DB_ENABLE_LOGGING !== '0' || false,
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ['./**/entity/migrations/*.ts'],
  cli: { migrationsDir: 'migrations' },
  ssl: false,
};

// if (process.env.DB_USE_SSL !== '0') {
//     options.ssl = {
//         rejectUnauthorized: process.env.DB_REJECT_UNAUTHORIZED !== '0',
//     };
// }

module.exports = options;
