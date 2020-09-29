A simple API written in Node.js to be used for a TODO front-end application.

### Usage

It is created to be used by anyone who wants to get started building a JavaScript application, or to learn how to make HTTP requests without worrying about the back-end.

### Documentation
<!--TODO: add link to the swagger doc-->

[Here](https://github.com/oanaCristeaC) you can find details on how to make requests to the API. 

### Requirement

No pre-requirements or installations are needed to use this API. <br>

#### However, if you wish to play around with the code

You can do that following three steps: <br>
1. Download the git repository.<br>

2. Create an account with Cloud MongoDB Atlas and the database by following [the six steps found in the documentation](https://docs.atlas.mongodb.com/getting-started/)<br>

3. Create an environment ``` .env  ``` file with port no and connection to the database on your project root directory. <br>

```
// Example .env
PORT=5000

PASSWORD='yourPassHere'
DB='mongodb+srv://<yourUsernameHere>:<PASSWORD>@cluster0-jlqrz.mongodb.net/todos?retryWrites=true&w=majority

```
 
Your ``` DB ``` connection is shown in [Part 5.](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster/) of the MongoDB documentation. <br>

![connection](https://docs.atlas.mongodb.com/_images/gswa-driver-cso-example.png)



### Installation and Run 

Run the following commands to install the dependencies and start the API.

```
npm install

npm run serve
``` 

### License

v1.0 &copy; [ionela cristea](https://github.com/oanaCristeaC)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so




