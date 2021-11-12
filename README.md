# gateway-worker

# To run the app.

===============

Clone Notifications on your machine and follow the steps:
https://github.com/pankaj-shimpi/gateway.git

# Pre-requisite

Make sure you have Docker, NodeJS and NPM installed.

This app needed docker and it will create and run container for mongo and app itself.

To install docker visit: https://docs.docker.com/engine/install/

# To run and verify app

1. Make sure you have set all the required environment variables. Need to create .env file in the root directory. And add below fields

```
    AUTH_EMAIL=//email id to authenticate a user
    AUTH_PASSWORD=//password to authenticate a user
    DB_NAME=//database name
```

2. Now go to the directory.

```
    cd gateway
```

3. Run server

```
    Run "docker-compose up" in the root directory.
    Once app and mongo images created and server started, the app will authenticate a user using the creds provided in env variables.
    Then you will observe the logs for document creation in mongodb.
    Once session expires it will log an unauthorised user error and again authenticating the user and will starts its execution again. 
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

Finally, to stop both server just hit cltr+c and remove image from docker container.
