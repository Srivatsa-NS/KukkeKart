const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  // Create optimized directory if it doesn't exist
  const optimizedDir = 'src/assets/optimized';
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  try {
    // Find all image files
    const imageFiles = await glob('src/assets/**/*.{jpg,jpeg,png}');
    
    let optimizedCount = 0;
    
    for (const file of imageFiles) {
      const fileName = path.basename(file, path.extname(file));
      const outputPath = path.join(optimizedDir, `${fileName}.webp`);
      
      await sharp(file)
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      optimizedCount++;
      console.log(`✅ Optimized: ${file} -> ${outputPath}`);
    }

    console.log(`🎉 Optimized ${optimizedCount} images to WebP format!`);

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();