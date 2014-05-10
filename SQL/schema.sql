-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
 /* Describe your table here.*/
 username VARCHAR(20),
 room VARCHAR(20),
 text VARCHAR(200),
 createdAt DATETIME NOT NULL DEFAULT NOW(),
 ID int(11) not NULL auto_increment,
 PRIMARY KEY (ID)
);

/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/


-- CREATE TABLE collection (
--   title VARCHAR(100),
--   artist VARCHAR(100),
--   genre VARCHAR(30),
--   worth DOUBLE(4,2),
--   notes TEXT,
--   released DATE,
--   added DATE,
--   opened ENUM('yes','no'),
--   ID int(11) NOT NULL auto_increment,
--   PRIMARY KEY (ID)
-- );
