import packageJson from '../package.json';
export const ENV = process.env.ENV || 'dev';
export const STACK_NAME = `${ENV}-${packageJson.name}`;
