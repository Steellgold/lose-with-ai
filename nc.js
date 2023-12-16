const fs = require('fs');
const path = require('path');

/**
 * The file path of the generated Zod index file.
 * @type {string}
 */
const filePath = path.join(__dirname, 'prisma/generated/zod/index.ts');
if (fs.existsSync(filePath)) {
  let fileContent = fs.readFileSync(filePath, 'utf8');

  if (!fileContent.startsWith('// @ts-nocheck')) {
    fileContent = '// @ts-nocheck\n' + fileContent;

    fs.writeFileSync(filePath, fileContent, 'utf8');
  } else {
    console.log('File already has ts-nocheck');
  }
} else {
  console.log('File does not exist');
}