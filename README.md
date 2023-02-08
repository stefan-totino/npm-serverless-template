# ZECTR-Export

*[summary of the application]*

*[what's the cloud provider? what AWS services do we use?]*

# Usage

### [i] *installation*

*[what needs to be installed prior to running this app?]*
 
### [ii] *credentials*
 
*[IAM group name and policies to access AWS resources correctly]*

The NPM serverless framework *does* allow you to perform all of the neccessary configuration in a [cloud agnostic way](https://www.serverless.com/framework/docs/providers/aws/guide/credentials#use-serverless-dashboard-to-manage-aws-credentials)

Alternatively:

[AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

[AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

`aws configure`

For the configure command's full documentation see [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).
 
### [iii] *deployment*
 
*[how to build code and push it to dev. env. on AWS]*
 
### [iv] *commands*
 
*[how to run the app in dev. and what requests it accepts]*

The *"serverless"* code package is a popular and well maintained tool on NPM. It is neccessary for building, deploying, and tesing ZECTR-EXPORT. It can be installed and made available globally as a CLI using the following command:

`npm install serverless -g`

[AWS Serverless Application Model CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)

`npm i serverless-offline serverless-dotenv --save-dev`

`serverless plugin install -n serverless-dotenv-plugin`

# Tech Stack
 
compute | cloud | framework | runtime
|:-:|:-:|:-:|:-:|
![aws_lambda](https://user-images.githubusercontent.com/23315099/217169987-179189bd-c863-4392-95b0-99275d1d1378.png) | ![aws](https://user-images.githubusercontent.com/23315099/217170017-23ae7f53-e3ff-4d01-8f4e-1cd277788fce.jpg) | ![serverless_black](https://user-images.githubusercontent.com/23315099/217173177-7a3bf90c-d07a-4db5-b6c4-3fdfe028a438.png) | ![nodejs](https://user-images.githubusercontent.com/23315099/217170033-406837a0-8a41-4a01-acc3-38a18b196a4f.png) 
