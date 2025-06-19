// Use ES modules instead of require
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertSvgToIco() {
  try {
    const svgPath = path.join(__dirname, 'public', 'favicon-circle.svg');
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Convert SVG to PNG (single size for simplicity)
    
    // Create favicon.ico in app directory
    const outputPath = path.join(__dirname, 'src', 'app', 'favicon.ico');
    
    // Use sharp to convert SVG to PNG at different sizes for ICO
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, 'public', 'favicon-32.png'));
      
    console.log('PNG favicon created successfully!');
    
    // Copy the PNG as favicon.ico to the required location
    fs.copyFileSync(
      path.join(__dirname, 'public', 'favicon-32.png'), 
      outputPath
    );
    
    console.log('favicon.ico placed in src/app directory');
  } catch (err) {
    console.error('Error creating favicon:', err);
  }
}

convertSvgToIco();
