import svg2ico from "svg2ico";
import fs from "fs";
import path from "path";

// Read the SVG file
const svgPath = path.join(__dirname, "public", "favicon-circle.svg");
const svgBuffer = fs.readFileSync(svgPath);

// Convert SVG to ICO with multiple sizes for better quality across devices
svg2ico(svgBuffer, { sizes: [16, 32, 48, 64, 128, 256] })
  .then((icoBuffer) => {
    // Write to the app directory where Next.js looks for favicon.ico
    fs.writeFileSync(
      path.join(__dirname, "src", "app", "favicon.ico"),
      icoBuffer
    );

    // Also save a copy in public for reference
    fs.writeFileSync(path.join(__dirname, "public", "favicon.ico"), icoBuffer);

    console.log("favicon.ico created successfully!");
  })
  .catch((err) => {
    console.error("Error creating favicon:", err);
  });
