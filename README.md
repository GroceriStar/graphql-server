# graphql-server
[![Build Status](https://travis-ci.org/GroceriStar/graphql-server.svg?branch=master)](https://travis-ci.org/GroceriStar/graphql-server)

### Data

#### Static data
imported from `@groceristar/groceristar-fetch` plugin
More about this plugin [here](https://medium.com/groceristar/groceristar-fetch-small-module-that-weve-created-8b4a62bd5d7b):

#### Database schema
![schema](https://raw.githubusercontent.com/ChickenKyiv/database-visuals/master/Groceristar%20%20%20SqlDBM.png)
Details about current DB scheme: https://medium.com/groceristar/database-schema-of-groceristar-current-release-20dc1b4be7b9

This is a strucuture that we have in our models:
https://github.com/ChickenKyiv/database-visuals/tree/master/groceristar/models
same structure we use at groceristar-fetch, so we can easy grab data, that we need.
database(we'll use it later):
```
"url": "mongodb://heroku_p3w65n77:h3ab8q3uaqdk7tjrauhbl7dd6r@ds235065.mlab.com:35065/heroku_p3w65n77",
"name": "groceryDS",

```

### Rest API methods
This is a list of methods, that we have in our Frontend Version.
I can be like a checklist for us. In order to fully migrate from REST API server to graphQL we'll need to cover all of this cases: https://medium.com/groceristar/groceristar-website-methods-list-75b57e1414ae


 ### GroceryStar Documentation
 This is our main documentation space, related to Groceristar project: https://groceristar.github.io/documentation/


### Running the development server

```
npm install
```
Graphql server will be running in http://localhost:3000/

You can explore all schema types

![](https://i.imgur.com/YIGJRJH.png)


### GraphQL Resources
I have some collection of tutorials, websites, related to GraphQL topic, storing it here: https://github.com/ChickenKyiv/awesome-graphql-beginner-links


as default webpack config didn't support babel 7 yet, we have both versions at package.json


install?? looks like it's old version
// "babel-plugin-syntax-async-functions": "^6.13.0",
// "babel-plugin-transform-regenerator": "^6.26.0",
//
//     "plugins": [
// 		"syntax-async-functions",
// 		"transform-regenerator"
//   ]
//
https://itnext.io/building-a-graphql-api-using-graphql-yoga-lambda-and-mongodb-c0c195621f47
https://medium.com/@xoor/coding-a-graphql-api-with-node-js-c02d617f49f4

1) relations. i think we should debate each relation. because I think
our schema(picture that we have) have more old-fashion logic. For example -
`UserGrocery` table - it can be just part of `User` type. I saw a lot of
big projects, that just put everything in one place and then parse it.
2) for me its hard to keep in mind that we have `Items.` I mean I have in
my head structure of groceristar without items, and all documentation,
methods related to it. maybe it will be more easy for me - when I finish
dealing with our old servers. So I propose to have our development in two
ways:
a) just recreating/replacing our current GS server - so when we create for
example a query or method - we just open my old code - see how it works and
does the same logic

b) we can work with items in parallel, but we need to be aware that this
part of schema doesn't have our documentation coverage, so we'll need to
create everything from scratch.
it's not a problem for me, but I'll be more supportive to items version
when I'll know that we did basic important methods for ingredients,
grocery, departments. these 3 types have some complex things and I want to
address them first.

btw, if you have questions - ask them more specifically. and I think at
another task.
