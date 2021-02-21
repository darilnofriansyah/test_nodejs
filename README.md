## SERVER + CLIENT TESTING FOR NODEJS

## Requirement to run

- PostgreSQL 13

## RUN LOCALLY
Create database on psql
```bash
CREATE DATABASE vehicle;
```

Create types table
```bash
CREATE TABLE types(
    id SERIAL PRIMARY KEY,
    name VARCHAR (255)
);

INSERT INTO types (name) VALUES ('Truck');
INSERT INTO types (name) VALUES ('Mini Van');
INSERT INTO types (name) VALUES ('Sedan');
INSERT INTO types (name) VALUES ('Bus');
```

Create table on psql
```bash
CREATE TABLE cars(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES types (id)
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