const Jimp = require('jimp');

async function removeWhite() {
  try {
    const image = await Jimp.read('public/logo.png');
    console.log('Image loaded for background removal');
    
    const targetColor = { r: 255, g: 255, b: 255, a: 255 };
    const threshold = 30; // Color distance threshold
    
    let transparentPixels = 0;
    
    // Simple color distance using Euclidean distance
    const colorDistance = (c1, c2) => {
      return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) + 
        Math.pow(c1.g - c2.g, 2) + 
        Math.pow(c1.b - c2.b, 2)
      );
    };

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const thisColor = {
        r: this.bitmap.data[idx + 0],
        g: this.bitmap.data[idx + 1],
        b: this.bitmap.data[idx + 2],
        a: this.bitmap.data[idx + 3]
      };
      
      if (colorDistance(targetColor, thisColor) <= threshold) {
        this.bitmap.data[idx + 3] = 0; // Alpha to 0
        transparentPixels++;
      }
    });

    console.log(`Made ${transparentPixels} pixels transparent.`);
    await image.writeAsync('public/logo.png');
    console.log('Saved transparent logo to public/logo.png');
  } catch (err) {
    console.error('Error removing background:', err);
  }
}

removeWhite();
