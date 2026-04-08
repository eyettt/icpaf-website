const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('dist')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Match pollinations URLs
    const regex = /https:\/\/image\.pollinations\.ai\/prompt\/([^?"']+)(?:\?width=(\d+)&height=(\d+)[^"']*)?/g;
    
    content = content.replace(regex, (match, prompt, width, height) => {
        modified = true;
        
        // Decode prompt
        let decoded = prompt;
        try {
            decoded = decodeURIComponent(prompt);
        } catch (e) {
            // Ignore malformed URI
        }
        
        // Pick a keyword from the prompt to use as seed
        // We'll just use a hash of the prompt or a cleaned up version
        let seed = decoded.replace(/[^a-zA-Z0-9]/g, '').substring(0, 15) || 'water';
        
        let w = width || '800';
        let h = height || '600';
        
        return `https://picsum.photos/seed/${seed}/${w}/${h}`;
    });

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
