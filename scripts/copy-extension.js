const fs = require("fs-extra");
const path = require("path");

const buildDir = path.join(__dirname, "../build");
const distDir = path.join(__dirname, "../extension-dist");
const publicDir = path.join(__dirname, "../public");

fs.removeSync(distDir);
fs.ensureDirSync(distDir);

fs.copySync(buildDir, distDir);

["manifest.json", "background.js", "content.js", "icon.png"].forEach((file) => {
  const src = path.join(publicDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copySync(src, dest);
    console.log(`✅ Copied ${file}`);
  }
});

console.log("🚀 Extension build complete! Load `extension-dist/` in Chrome.");
