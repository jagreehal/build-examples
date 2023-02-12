import express from 'express';
import { add, getAwsSecret } from '@jagsjoint/example-library';

export const app = express();

app.get('/', async (req, res) => {
  add(1, 2);
  // const x = getAwsSecret('xx');
  const resp = await fetch('https://api.ipify.org?format=json');
  const json = await resp.json();
  res.json(json);
});
