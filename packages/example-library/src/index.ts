import { getSecret } from './uses-aws';

export function getAwsSecret(secretName: string) {
  return getSecret(secretName);
}

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}
