-- Checking if a database named "MVC_Blog_db" already exists and drops it if so. 
-- This prevents error if trying to create a database
DROP DATABASE IF EXISTS MVC_Blog_db;

-- Creates a new database named "MVC_Blog_db"
-- This establishes the database to store MVC Blog information
CREATE DATABASE MVC_Blog_db;