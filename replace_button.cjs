const fs = require('fs');
const path = require('path');

const dir = './src/components/case-studies';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Add import right after the last import
    if (!content.includes('import DownloadButton')) {
      content = content.replace(/(import.*\n)+/m, (match) => match + "import DownloadButton from '../DownloadButton';\n");
    }

    const buttonRegex = /<button className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg">[\s\S]*?<\/button>/g;

    if (buttonRegex.test(content)) {
      content = content.replace(buttonRegex, '<DownloadButton isFr={isFr} />');
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}
