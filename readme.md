# Emotrr

An application built with a React frontend combining 2 API's to produce an application where users can detect the emotional tones of people they follow on twitter.

### ABOUT IBM WATSON'S TONE ANALYZER

The IBM Watson™ Tone Analyzer service uses linguistic analysis to detect emotional, social, and language tones in written text. The service can analyze tone at both the document and sentence levels. You can use the service to understand how your written communications are perceived and then to improve the tone of your communications.

### TECH STACK

1. Node.js
2. Express.js
3. React.js
4. MongoDB

### MISC TECH

1. Mongoose
2. watson-developer-cloud
3. mocha

### DOCUMENTATION
1. Twitter API:
2. IBM Watson Tone Analyzer: 

### DOWNLOAD PROJECT & INSTALL
1. Git clone this project
2. Open up Terminal or Command line
3. Navigate to the directory where the project was cloned to
4. Run this command: psql -f ./config/db/schema.sql
5. This command will create a PostgreSQL database along with the tables
6. Setup environment variables:
    * Create .env file in your project root with this variable
```
DATABASE_URL=
```
7. To run the application, you need to install the dependencies, run this command: npm install --save
8. To start the application, run this command: npm start
9. The application will run at: localhost:3000, if that port is already in use, run this command: PORT=1738 npm start
10. This command will start the server at: localhost:1738