# npm-serverless-template

## INTRO

Serverless is an overloaded term. In this context we are refering to the name of a framework which assists developers when creating software that is written in a severless computing style.

For more information on the framework, start here: 

https://www.npmjs.com/package/serverless

https://www.serverless.com/framework/docs

For more information on the paradigm of serverless itself:

I recommend punching in `serverless computing` to your favorite search engine, and pick your poison from there (all major cloud providers will take a stab at defining it for you).

## Env. Setup & Local Builds

To begin developing with serverless and nodejs, we have to install a CLI so we can run serverless-specific commands. To install it, we can run:

`npm install serverless -g`

After a successful npm installation we can create the basis for a code repository like by navigating to an empty directory and running a command like this:

`serverless create --template aws-nodejs`

