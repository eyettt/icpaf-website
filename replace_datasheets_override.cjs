const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir);

for (const file of files) {
  const fullPath = path.join(dir, file);
  if (fs.statSync(fullPath).isDirectory()) continue;
  
  if (file.endsWith('.tsx') && file !== 'DownloadButton.tsx') {
    let content = fs.readFileSync(fullPath, 'utf8');

    // This regex catches ANY <button> that contains "Fiche Technique" or "Data Sheet" 
    const buttonRegex = /<button[\s\S]*?>(?:[\s\S]*?)?(?:Datasheet|Data Sheet|Fiche Technique)(?:[\s\S]*?)?<\/button>/gi;

    if (buttonRegex.test(content)) {
      let importPath = "import DownloadButton from './DownloadButton';\n";
      
      if (!content.includes('import DownloadButton')) {
        content = content.replace(/(import.*\n)+/m, (match) => match + importPath);
      }

      content = content.replace(buttonRegex, '<DownloadButton isFr={isFr} textEn="Request Technical Data Sheet" textFr="Demander la Fiche Technique" />');
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated ${fullPath}`);
    }
  }
}
