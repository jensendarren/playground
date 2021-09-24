# Fastify File Upload Demo

This is a demo of a basic file upload from a html form. It uses [fastify](https://github.com/fastify/fastify) and the [fastify-multipart](https://github.com/fastify/fastify-multipart) plugin.

## Run the demo

Install and start the server and the client like so:

```
npm install
npm run server
```

In a new terminal start the client whcih serves the html file

```
npm run client
```

Now in the browser, navigate to the client app on [http://localhost:8000](http://localhost:8000), select a file and click the 'Upload File' button. Over on the 'server' check the folder and you will see the file you just uploaded.

