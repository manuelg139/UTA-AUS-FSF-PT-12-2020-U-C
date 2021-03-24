/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS popQuiz_DB;

/* Create database */
CREATE DATABASE popQuiz_DB;
USE popQuiz_DB;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE stuff (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
