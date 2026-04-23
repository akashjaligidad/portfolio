const fs = require('fs');

const code = fs.readFileSync('src/App.tsx', 'utf8');
const lines = code.split('\n');

let divStack = [];
let lineNum = 0;

for (let line of lines) {
    lineNum++;
    
    // Simple regex for <div and </div>
    // Note: This is a bit naive but can help find obvious mismatches
    let openingMatches = line.matchAll(/<div(\s|>|$)/g);
    for (let match of openingMatches) {
        // Check if it's self-closing
        const start = match.index;
        const rest = line.substring(start);
        const endOfTag = rest.indexOf('>');
        if (endOfTag !== -1) {
            const tag = rest.substring(0, endOfTag + 1);
            if (!tag.endsWith('/>')) {
                divStack.push({ lineNum, content: match[0] });
            }
        } else {
            // Tag spans multiple lines, assume not self-closing for now
            divStack.push({ lineNum, content: match[0] });
        }
    }
    
    let closingMatches = line.matchAll(/<\/div>/g);
    for (let match of closingMatches) {
        if (divStack.length > 0) {
            divStack.pop();
        } else {
            console.log(`Error: Extra </div> at line ${lineNum}`);
        }
    }
}

console.log(`Stack size at end: ${divStack.length}`);
if (divStack.length > 0) {
    console.log('Unclosed divs:');
    divStack.forEach(d => console.log(`  Line ${d.lineNum}`));
}
