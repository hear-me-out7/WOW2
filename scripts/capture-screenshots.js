import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:8080';
const SCREENSHOT_DIR = path.join(__dirname, '..', 'screenshots');

// All routes to capture
const routes = [
  { path: '/', name: 'home' },
  { path: '/program', name: 'program' },
  { path: '/team', name: 'team' },
  { path: '/consultation', name: 'consultation' },
  { path: '/resources', name: 'resources' },
  { path: '/connect', name: 'connect' },
  { path: '/resources/tips-and-tricks', name: 'resources-tips-and-tricks' },
  { path: '/resources/adhd-and-ot', name: 'resources-adhd-and-ot' },
  { path: '/resources/breath-and-posture', name: 'resources-breath-and-posture' },
  { path: '/resources/sensory-motor', name: 'resources-sensory-motor' },
  { path: '/resources/social-emotional', name: 'resources-social-emotional' },
  { path: '/resources/executive-functioning', name: 'resources-executive-functioning' }
];

// Viewports
const viewports = {
  desktop: { width: 1920, height: 1080 },
  mobile: { width: 375, height: 667 }
};

async function captureScreenshots() {
  console.log('🚀 Starting screenshot capture...\n');

  // Create screenshots directory if it doesn't exist
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
    console.log(`📁 Created directory: ${SCREENSHOT_DIR}\n`);
  }

  // Launch browser
  const browser = await chromium.launch({ headless: true });
  console.log('🌐 Browser launched\n');

  try {
    for (const [viewportName, viewport] of Object.entries(viewports)) {
      console.log(`📱 Capturing ${viewportName} screenshots (${viewport.width}x${viewport.height})...\n`);

      const context = await browser.newContext({ viewport });
      const page = await context.newPage();

      for (const route of routes) {
        const url = `${BASE_URL}${route.path}`;
        const filename = `${route.name}-${viewportName}.png`;
        const filepath = path.join(SCREENSHOT_DIR, filename);

        try {
          console.log(`  📸 ${route.name} (${viewportName})...`);

          // Navigate and wait for page to be fully loaded
          await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

          // Wait a bit for any animations or lazy loading
          await page.waitForTimeout(1000);

          // Take full page screenshot
          await page.screenshot({
            path: filepath,
            fullPage: true
          });

          console.log(`     ✅ Saved: ${filename}`);
        } catch (error) {
          console.error(`     ❌ Failed: ${route.name} - ${error.message}`);
        }
      }

      await context.close();
      console.log(`\n✅ Completed ${viewportName} screenshots\n`);
    }

    console.log('🎉 All screenshots captured successfully!');
    console.log(`📁 Screenshots saved to: ${SCREENSHOT_DIR}`);
  } catch (error) {
    console.error('❌ Error during screenshot capture:', error);
    throw error;
  } finally {
    await browser.close();
    console.log('🌐 Browser closed');
  }
}

// Run the script
captureScreenshots().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
