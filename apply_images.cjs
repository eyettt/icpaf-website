const fs = require('fs');
const path = require('path');

const mappings = {
    'Boiler': '/images/Technologies/boiler.jpg',
    'CoolingTower': '/images/Technologies/Cooling-Towers.png',
    'Desalination': '/images/Technologies/desalination.webp',
    'DrinkingWater': '/images/Technologies/drinking-Water-Treatment-Process.webp',
    'ProcessWater': '/images/Technologies/process-water.jpg',
    'WasteWater': '/images/Technologies/Wastewater-treatment.jpg',
    'Microfiltration': '/images/Filtration/micro filtration.jpg',
    'NanoFiltration': '/images/Filtration/nano filtration.jpg',
    'UltraFiltration': '/images/Filtration/micro filtration.jpg',
    'ReverseOsmosis': '/images/Main Menu/reverse_osmosis.jpg',
    'Ceramic': '/images/Membranes/ceramic-membrane.jpg',
    'Polymer': '/images/Membranes/polymeric-membrane.jpg',
    'Hybrid': '/images/Membranes/polymeric-membrane.jpg',
    'AcidLiquid': '/images/solutions/Distillation-is-one-of-the-processes-of-water-purification.jpg',
    'Seawater': '/images/solutions/Seawater-Desalination.jpg',
    'MembraneCoagulation': '/images/solutions/membrane coagulation.webp',
    'OilWater': '/images/solutions/picture-of-oily-water.jpg',
    'ReclaimedWater': '/images/solutions/reclaimed water reused.webp',
    'OliveMill': '/images/case studies/olive mill.jpeg',
    'Cosmetic': '/images/solutions/cosmetic water treatment.avif',
    'AcidLead': '/images/Main Menu/industrial purity.jpg',
    'SodiumSulfate': '/images/Main Menu/industrial purity.jpg',
    'Textile': '/images/Sub main menu/textile dyeing.webp',
    'BentoGrid': '/images/Main Menu/industrial purity.jpg',
    'AboutPage': '/images/About us/mission and vision.png',
    'CaseStudiesPage': '/images/case studies/olive mill.jpeg',
    'FiltrationPage': '/images/Filtration/nano filtration.jpg',
    'MembranesPage': '/images/Membranes/polymeric-membrane.jpg',
    'ProductsPage': '/images/Technologies/boiler.jpg',
    'ServicesPage': '/images/Technologies/Wastewater-treatment.jpg',
    'SolutionsPage': '/images/solutions/membrane coagulation.webp',
    'TechnologyPage': '/images/Technologies/drinking-Water-Treatment-Process.webp',
    'TechSolutions': '/images/Technologies/process-water.jpg',
    'HomePage': '/images/Main Menu/industrial purity.jpg',
    'TeamPage': '/images/About us/team/khaled.jpeg',
    'PhilosophyPage': '/images/About us/mission and vision.png',
    'Hero': '/images/Main Menu/industrial purity.jpg',
    'TechSolutions': '/images/Technologies/process-water.jpg'
};

function getImageForFile(filePath, contextMatch) {
    const filename = path.basename(filePath);
    for (const [key, value] of Object.entries(mappings)) {
        if (filename.includes(key)) {
            return value;
        }
    }
    // Context
    if (contextMatch && typeof contextMatch === 'string') {
        const lower = contextMatch.toLowerCase();
        if (lower.includes('textile')) return mappings['Textile'];
        if (lower.includes('acid')) return mappings['AcidLiquid'];
        if (lower.includes('seawater')) return mappings['Seawater'];
        if (lower.includes('cosmetic')) return mappings['Cosmetic'];
    }
    
    return '/images/Main Menu/industrial purity.jpg'; // fallback
}

function processDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            const original = fs.readFileSync(fullPath, 'utf8');
            let newContent = original;

            newContent = newContent.replace(/src=["'](https:\/\/picsum\.photos[^"']+)["']/g, (m, url) => `src="${getImageForFile(fullPath, url)}"`);
            newContent = newContent.replace(/image:\s*['"](https:\/\/picsum\.photos[^'"]+)['"]/g, (m, url) => `image: '${getImageForFile(fullPath, url)}'`);
            newContent = newContent.replace(/url:\s*['"](https:\/\/picsum\.photos[^'"]+)['"]/g, (m, url) => `url: '${getImageForFile(fullPath, url)}'`);
            newContent = newContent.replace(/url\(["']?(https:\/\/picsum\.photos[^"']+)["']?\)/g, (m, url) => `url('${getImageForFile(fullPath, url)}')`);

            if (original !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated', fullPath);
            }
        }
    });
}

processDirectory('./src/components');
console.log('Script execution complete.');
