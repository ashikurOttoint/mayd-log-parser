import * as fs from 'fs';
import { FileReader } from '../helpers/fileReader';

test('FileReader can read file', async () => {
  const fReader = new FileReader(fs);
  const data = await fReader.read('./app.log');
  expect(data).toMatch(/.*/);
});

test('FileReader fails with an error if file not found', async () => {
  try {
    const fReader = new FileReader(fs);
    const data = await fReader.read('nothing');
  } catch (e) {
    expect(e).toThrowError;
  }
});
