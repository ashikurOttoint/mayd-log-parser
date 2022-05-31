import * as fs from 'fs';
import * as process from 'process';

import { FileReader } from './helpers/fileReader';
import { FileWriter } from './helpers/fileWriter';
import { CMDReader } from './helpers/cmdReader';

import { TextParser } from './helpers/textParser';

const fReader = new FileReader(fs);
const fWriter = new FileWriter(fs);
const cmdReader = new CMDReader(process);
const parser = new TextParser();

async function main() {
  const text = await fReader.read(cmdReader.getInputPath());
  const output = parser.parse(text);
  fWriter.write(cmdReader.getOutoutPath(), JSON.stringify(output));
}

main();
