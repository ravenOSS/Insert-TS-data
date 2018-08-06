# Insert-TS-data
Inserts random number with a timestamp into a mongodb collection.
Uses dotenv for environment variables together with dotenv-expand 
that allows concantenation of parameters.
Suitable for use with mongodb v3.6. Call to mongodb returns a client 
to which a database is attached.
Purpose is to create a simple data stream for testing apps.
