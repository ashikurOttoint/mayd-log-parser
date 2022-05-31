import * as fs from 'fs';
import { FileWriter } from '../helpers/fileWriter';

test('FileWriter can write file', () => {
  const testString = "this is test string";
  const assetFilePath = 'error-test.json';
  const fWriter = new FileWriter(fs);
  fWriter.write(assetFilePath,testString);
  expect(fs.existsSync(__dirname + '/../../error-test.json')).toBe(true);

});