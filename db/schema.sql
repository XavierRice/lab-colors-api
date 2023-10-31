DROP DATABASE IF EXISTS colors_dev; /* he structure of the database. It defines how data is organized and how relationships among data are handled. A schema defines the tables, fields, data types, relationships, and constraints in a database.  */
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE colors (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
is_favorite BOOLEAN
); 

