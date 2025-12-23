const fs = require('fs');
const { glob } = require('glob');
const path = require('path');

async function updateImports() {
  console.log('🔄 Starting import replacement...');
  
  try {
    // Find all TypeScript/JavaScript files
    const files = await glob('src/**/*.{ts,tsx,js,jsx}');
    
    let updatedFiles = 0;
    let totalReplacements = 0;
    
    for (const file of files) {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Replace image imports with optimized WebP versions
      content = content.replace(
        /from ["']@\/assets\/([^"']+)\.(jpg|jpeg|png)["']/g,
        (match, imagePath, ext) => {
          const fileName = path.basename(imagePath);
          totalReplacements++;
          return `from "@/assets/optimized/${fileName}.webp"`;
        }
      );
      
      // If content changed, write back to file
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        updatedFiles++;
        console.log(`✅ Updated: ${file}`);
      }
    }
    
    console.log(`🎉 Updated ${updatedFiles} files with ${totalReplacements} image import replacements!`);
    
  } catch (error) {
    console.error('❌ Error updating imports:', error);
    process.exit(1);
  }
}

updateImports();