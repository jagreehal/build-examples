import { Handler } from 'aws-lambda';
import { add, getAwsSecret } from '@jagsjoint/example-library';

export const handler: Handler = async () => {
  // const x = getAwsSecret('xx');
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
    }),
  };
};
