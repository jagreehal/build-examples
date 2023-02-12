import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';

export async function getSecret(secretName: string) {
  return new Promise((resolve, reject) => {
    const client = new SecretsManagerClient({ region: 'us-east-1' });
    const command = new GetSecretValueCommand({ SecretId: secretName });
    client.send(command, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
