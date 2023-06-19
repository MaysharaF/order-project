const path = require("path");

const dbDirectory = path.join(__dirname, "..", "..", "dev.sqlite3");

const migrationDirectory = path.join(__dirname, "migrations");

const config = {
  production: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      charset: "utf8",
    },
    migrations: {
      directory: migrationDirectory,
    },
  },
};

const knex = require("knex")(config[process.env.ENVIRONMENT]);

console.log(`Database environment is [${process.env.ENVIRONMENT}]`);

knex.migrate.latest().then(() => console.log("database up"));

module.exports = { knex };
