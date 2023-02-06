/*
** https://www.youtube.com/watch?v=oFYFqOzJdqY&t=14s
*/

'use strict';

module.exports.hello = async (event) => {
  console.log('Here is a serverless log message!');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
