import * as cdk from 'aws-cdk-lib';
import { createLambdaFunction } from './utils/create-lambda-function';
export class Example extends cdk.Stack {
  constructor(app: cdk.App, id: string) {
    super(app, id);

    const helloWorldFunction = createLambdaFunction({
      scope: this,
      id: 'hello-world',
      props: {},
    });

    app.synth();
  }
}
