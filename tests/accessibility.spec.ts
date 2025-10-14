import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// All pages to test
const pages = [
  { name: 'Home', url: '/' },
  { name: 'Program', url: '/program' },
  { name: 'Team', url: '/team' },
  { name: 'Consultation', url: '/consultation' },
  { name: 'Resources', url: '/resources' },
  { name: 'Connect', url: '/connect' },
  { name: 'Resources: Tips & Tricks', url: '/resources/tips-and-tricks' },
  { name: 'Resources: ADHD & OT', url: '/resources/adhd-and-ot' },
  { name: 'Resources: Breath & Posture', url: '/resources/breath-and-posture' },
  { name: 'Resources: Sensory Motor', url: '/resources/sensory-motor' },
  { name: 'Resources: Social Emotional', url: '/resources/social-emotional' },
  { name: 'Resources: Executive Functioning', url: '/resources/executive-functioning' },
];

test.describe('Accessibility Testing - WCAG Compliance', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport for consistent testing
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  // Test each page for color contrast violations
  for (const pageInfo of pages) {
    test(`${pageInfo.name} - should not have color contrast violations`, async ({ page }) => {
      await page.goto(`http://localhost:8080${pageInfo.url}`);

      // Wait for page to be fully loaded
      await page.waitForLoadState('networkidle');

      // Run axe accessibility scan - ONLY check color-contrast
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withRules(['color-contrast']) // Only test contrast
        .analyze();

      // Log violations if any
      if (accessibilityScanResults.violations.length > 0) {
        console.log(`\n${'='.repeat(80)}`);
        console.log(`❌ COLOR CONTRAST VIOLATIONS ON: ${pageInfo.name}`);
        console.log(`${'='.repeat(80)}\n`);

        accessibilityScanResults.violations.forEach((violation, index) => {
          console.log(`${index + 1}. ${violation.id}: ${violation.help}`);
          console.log(`   Impact: ${violation.impact}`);
          console.log(`   Description: ${violation.description}`);
          console.log(`   WCAG: ${violation.tags.join(', ')}`);
          console.log(`   Affected elements (${violation.nodes.length}):`);

          violation.nodes.forEach((node, nodeIndex) => {
            console.log(`\n   Element ${nodeIndex + 1}:`);
            console.log(`     HTML: ${node.html.substring(0, 150)}${node.html.length > 150 ? '...' : ''}`);
            console.log(`     Selector: ${node.target.join(' ')}`);
            console.log(`     Failure: ${node.failureSummary}`);

            // Extract color information if available
            if (node.any.length > 0) {
              node.any.forEach(check => {
                if (check.data) {
                  console.log(`     Colors: FG=${check.data.fgColor}, BG=${check.data.bgColor}, Contrast=${check.data.contrastRatio}`);
                  console.log(`     Expected: ${check.data.expectedContrastRatio}`);
                }
              });
            }
          });
          console.log('');
        });
      }

      // Fail test if violations found
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  // Comprehensive full accessibility scan on home page
  test('Home - comprehensive accessibility audit', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']) // All WCAG AA standards
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      console.log(`\n${'='.repeat(80)}`);
      console.log(`📊 FULL ACCESSIBILITY AUDIT - HOME PAGE`);
      console.log(`${'='.repeat(80)}\n`);
      console.log(`Total violations: ${accessibilityScanResults.violations.length}\n`);

      // Group by impact
      const byImpact = accessibilityScanResults.violations.reduce((acc, v) => {
        acc[v.impact || 'unknown'] = (acc[v.impact || 'unknown'] || 0) + v.nodes.length;
        return acc;
      }, {} as Record<string, number>);

      console.log('Violations by impact:');
      Object.entries(byImpact).forEach(([impact, count]) => {
        console.log(`  ${impact}: ${count}`);
      });
      console.log('');

      accessibilityScanResults.violations.forEach((violation, index) => {
        console.log(`${index + 1}. [${violation.impact}] ${violation.id}`);
        console.log(`   ${violation.help}`);
        console.log(`   Affected: ${violation.nodes.length} elements`);
      });
    }

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
