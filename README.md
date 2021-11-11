# gateway-worker

# To run the app.

===============

Clone Notifications on your machine and follow the steps:
https://github.com/pankaj-shimpi/gateway.git

Pre-requisite

# Make sure you have NodeJS and NPM installed.
# Here we do not have dockerfile for mongodb. instead db is hosted through mongodb atlas.

1. Make sure you have set all the required environment variables. Need to create .env file in the root directory.

```
e.g
PORT=//Port number for the server to run
AUTH_EMAIL=//email id to authenticate a user
AUTH_PASSWORD=//password to authenticate a user
DB_NAME=//database name
DB_USER=database user
DB_PASS=database password
DB_HOST=database host

Note: We have used mongoDB atlas as DB host. so we need to configure the database details in environment variable.
To setup mongodb we need to create a user on mongodb atlas and need to use those details in environment variable.
e.g DB_HOST = cluster0.ewpxq.mongodb.net // mongodb atlas host.
    DB_NAME = mongodb atlas cluster database name
    DB_USER = mongodb atlas cluster user name
    DB_PASS = mongodb atlas cluster user password

```

2. Now go to the directory.

```
    cd gateway
```

3. Install the server dependencies

```
    npm install
```

4. Run server

```
    To run the server you can either run the command npm start or node src/server.js.
```

5. To run the tests.

```
    npm run test
```

6. To get the test coverage

```
    npm run test:coverage
```

7. to check lint issues

```
    npm run lint
```

Finally, to stop both server just hit cltr+c
