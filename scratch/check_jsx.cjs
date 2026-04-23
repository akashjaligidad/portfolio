const fs = require('fs');
const parser = require('@babel/parser');

const code = fs.readFileSync('src/App.tsx', 'utf8');

try {
  parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  console.log('No syntax errors found.');
} catch (e) {
  console.log('Error found:');
  console.log(e.message);
  if (e.loc) {
    console.log(`Location: Line ${e.loc.line}, Column ${e.loc.column}`);
    const lines = code.split('\n');
    console.log('Context:');
    for (let i = Math.max(0, e.loc.line - 5); i < Math.min(lines.length, e.loc.line + 5); i++) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
  }
}
