## SERVER + CLIENT TESTING FOR NODEJS

## Requirement to run

- PostgreSQL 13

## RUN LOCALLY
Create database on psql
```bash
CREATE DATABASE vehicle;
```

Create table on psql
```bash
CREATE TABLE cars(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

Run on command line
```bash
npm install
npm run serve
```

Change the credential on config/db.js (hostname on developtment is localhost)
```bash
const db = new Sequelize('vehicle', '{username}', '{password}', {
    host: '{hostname}',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
```