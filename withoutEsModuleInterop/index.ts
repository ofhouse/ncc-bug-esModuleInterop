import * as fs from 'fs';
import * as path from 'path';

const file = fs.readFileSync(path.join(__dirname, 'test.txt'));
console.log(file);
