const fs = require('fs');
const path = require('path');

const dirs = [
  './src/components',
  './src/components/technology',
  './src/components/solutions',
  './src/components/filtration'
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) continue;
    
    if (file.endsWith('.tsx') && file !== 'DownloadButton.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');

      const buttonRegex = /<button className="px-8 py-4 bg-sapphire text-white font-mono tracking-widest uppercase text-sm font-bold hover:bg-oxygen-blue transition-colors flex items-center gap-3 rounded-full shadow-lg">[\s\S]*?(?:Datasheet|Data Sheet|Fiche Technique)[\s\S]*?<\/button>/gi;

      if (buttonRegex.test(content)) {
        let importPath = "import DownloadButton from './DownloadButton';\n";
        if (dir !== './src/components') {
            importPath = "import DownloadButton from '../DownloadButton';\n";
        }
        
        if (!content.includes('import DownloadButton')) {
          content = content.replace(/(import.*\n)+/m, (match) => match + importPath);
        }

        content = content.replace(buttonRegex, '<DownloadButton isFr={isFr} textEn="Request Technical Data Sheet" textFr="Demander la Fiche Technique" />');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

dirs.forEach(processDir);
