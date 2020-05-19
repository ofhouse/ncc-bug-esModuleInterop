# `@zeit/ncc` bug with `esModuleInterop=true`

This repository is a reproduction of a bug with the ncc compiler:

## TypeScript (`esModuleInterop: false`)

This is the normal setting which includes the required asset `test.txt`

### Files

```ts
// tsconfig.json
{
  "compilerOptions": {
    "esModuleInterop": false
  }
}

import * as fs from 'fs';
import * as path from 'path';

const file = fs.readFileSync(path.join(__dirname, 'test.txt'));
console.log(file);
```

### Output

```sh
index.js
test.txt
```

## TypeScript (`esModuleInterop: true`)

### Files

```ts
// tsconfig.json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}

import * as fs from 'fs';
import * as path from 'path';

const file = fs.readFileSync(path.join(__dirname, 'test.txt'));
console.log(file);
```

### Output

```sh
index.js
```
