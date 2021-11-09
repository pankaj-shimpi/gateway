# gateway

# To run the app.

===============

Clone Notifications on your machine and follow the steps:
https://github.com/pankaj-shimpi/gateway.git

Pre-requisite

# Make sure you have NodeJS and NPM installed.

# Make sure you have set all the required environment variables.

e.g
PORT=//Port number for the server to run
AUTH_EMAIL=//email id to authenticate a user
AUTH_PASSWORD=// password to authenticate a user
DB_NAME=//database name
DB_USER=database user
DB_PASS=database password
DB_HOST=database host

Note: We have used mongoDB atlas as DB host. so we need to configure the database details in environment variable.

1. Now go to the directory.

```
    cd gateway
```

2. Install the server dependencies

```
    npm install
```

3. Run server

```
    To run the server you can either run the command npm start or node src/server.js.
```

4. To run the tests.

```
    npm run test
```

5. To get the test coverage

```
    npm run test:coverage
```

6. to check lint issues

```
    npm run lint
```

Finally, to stop both server just hit cltr+c