CREATE DATABASE vehicle;

CREATE TABLE types(
    id SERIAL PRIMARY KEY,
    name VARCHAR (255)
);

INSERT INTO types (name) VALUES ('Truck');
INSERT INTO types (name) VALUES ('Mini Van');
INSERT INTO types (name) VALUES ('Sedan');
INSERT INTO types (name) VALUES ('Bus');


CREATE TABLE cars(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES types (id)
);