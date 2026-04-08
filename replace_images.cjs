const fs = require('fs');
const path = require('path');

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync('./src', function(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace <img src="..." alt="..." />
    // We need to match the src and the alt. They might be on different lines.
    // Let's use a regex that matches the whole img tag.
    const imgRegex = /<img[^>]+>/g;
    content = content.replace(imgRegex, (imgTag) => {
        if (!imgTag.includes('unsplash.com')) return imgTag;
        
        const altMatch = imgTag.match(/alt="([^"]+)"/);
        if (altMatch) {
            const altText = altMatch[1];
            // enhance prompt slightly to make it more industrial
            const prompt = `industrial ${altText} water treatment facility high tech`;
            const encodedPrompt = encodeURIComponent(prompt);
            const newSrc = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=600&nologo=true`;
            
            return imgTag.replace(/src="[^"]+"/, `src="${newSrc}"`);
        }
        return imgTag;
    });

    // Replace image: '...' in objects. We can look for image: '...', \s* title: '...'
    // Actually, let's just replace any unsplash URL with a generic industrial prompt if we can't find context,
    // but we can try to find the title.
    const objRegex = /image:\s*['"](https:\/\/images\.unsplash\.com[^'"]+)['"]/g;
    content = content.replace(objRegex, (match, url, offset, fullString) => {
        // Try to find title nearby
        const context = fullString.substring(offset, offset + 200);
        const titleMatch = context.match(/title:\s*['"]([^'"]+)['"]/);
        
        let prompt = "large scale industrial reverse osmosis membrane water filtration system";
        if (titleMatch) {
            prompt = `industrial ${titleMatch[1]} water treatment facility high tech`;
        }
        
        const encodedPrompt = encodeURIComponent(prompt);
        const newSrc = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=600&nologo=true`;
        
        return `image: '${newSrc}'`;
    });
    
    // Also handle url: '...' in Hero.tsx
    const urlRegex = /url:\s*['"](https:\/\/images\.unsplash\.com[^'"]+)['"]/g;
    content = content.replace(urlRegex, (match, url, offset, fullString) => {
        const context = fullString.substring(Math.max(0, offset - 100), offset + 100);
        const titleMatch = context.match(/title:\s*['"]([^'"]+)['"]/);
        
        let prompt = "large scale industrial reverse osmosis membrane water filtration system";
        if (titleMatch) {
            prompt = `industrial ${titleMatch[1]} water treatment facility high tech`;
        }
        
        const encodedPrompt = encodeURIComponent(prompt);
        const newSrc = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=600&nologo=true`;
        
        return `url: '${newSrc}'`;
    });
    
    // Also handle src: "..." in HomePage.tsx
    const srcRegex = /src:\s*["'](https:\/\/images\.unsplash\.com[^"']+)["']/g;
    content = content.replace(srcRegex, (match, url, offset, fullString) => {
        let prompt = "large scale industrial reverse osmosis membrane water filtration system";
        const encodedPrompt = encodeURIComponent(prompt);
        const newSrc = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=600&nologo=true`;
        return `src: "${newSrc}"`;
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
});
