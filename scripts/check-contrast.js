// WCAG Contrast Ratio Calculator

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function luminance(r, g, b) {
  // Convert to 0-1 range
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

function checkCompliance(ratio) {
  return {
    aa_normal: ratio >= 4.5,
    aa_large: ratio >= 3,
    aaa_normal: ratio >= 7,
    aaa_large: ratio >= 4.5
  };
}

// Color combinations to test
const tests = [
  {
    name: 'Body text on pale cream background',
    foreground: '#2A2A2A',
    background: '#F6F5ED',
    type: 'normal'
  },
  {
    name: 'Body text on card background (lighter cream)',
    foreground: '#2A2A2A',
    background: '#FCFCFB',
    type: 'normal'
  },
  {
    name: 'Teal headings on pale cream',
    foreground: '#1F7A6F',
    background: '#F6F5ED',
    type: 'large'
  },
  {
    name: 'Soft green on pale cream',
    foreground: '#7CC196',
    background: '#F6F5ED',
    type: 'normal'
  },
  {
    name: 'Coral accent on pale cream',
    foreground: '#F49390',
    background: '#F6F5ED',
    type: 'normal'
  },
  {
    name: 'Primary button (white text on teal)',
    foreground: '#FFFFFF',
    background: '#1F7A6F',
    type: 'normal'
  },
  {
    name: 'Secondary button (charcoal text on coral)',
    foreground: '#2A2A2A',
    background: '#F49390',
    type: 'normal'
  },
  {
    name: 'White text on dark-bg',
    foreground: '#FFFFFF',
    background: '#404040',
    type: 'normal'
  },
  {
    name: 'Cream text on dark-bg',
    foreground: '#F6F5ED',
    background: '#404040',
    type: 'normal'
  },
  {
    name: 'White text on black-bg',
    foreground: '#FFFFFF',
    background: '#262626',
    type: 'normal'
  },
  {
    name: 'Cream text on black-bg',
    foreground: '#F6F5ED',
    background: '#262626',
    type: 'normal'
  },
  {
    name: 'White headings on dark section',
    foreground: '#FFFFFF',
    background: '#404040',
    type: 'large'
  },
  {
    name: 'Foreground text on cream cards',
    foreground: '#2A2A2A',
    background: '#FCFCFB',
    type: 'normal'
  }
];

console.log('\\n🔍 WOW ADHD Contrast Ratio Analysis\\n');
console.log('=' .repeat(80));

let allPass = true;
const failures = [];

tests.forEach((test, index) => {
  const ratio = contrastRatio(test.foreground, test.background);
  const compliance = checkCompliance(ratio);

  const required = test.type === 'normal' ? 'AA (4.5:1)' : 'AA Large (3:1)';
  const passes = test.type === 'normal' ? compliance.aa_normal : compliance.aa_large;

  const status = passes ? '✅ PASS' : '❌ FAIL';

  console.log(`\\n${index + 1}. ${test.name}`);
  console.log(`   Foreground: ${test.foreground}`);
  console.log(`   Background: ${test.background}`);
  console.log(`   Contrast Ratio: ${ratio.toFixed(2)}:1`);
  console.log(`   Required: ${required}`);
  console.log(`   Result: ${status}`);

  if (compliance.aaa_normal) {
    console.log(`   ⭐ Exceeds AAA standards!`);
  }

  if (!passes) {
    allPass = false;
    failures.push({
      ...test,
      ratio: ratio.toFixed(2)
    });
  }
});

console.log('\\n' + '='.repeat(80));
console.log('\\n📊 SUMMARY\\n');

if (allPass) {
  console.log('✅ All color combinations PASS WCAG AA standards!');
  console.log('   The site has excellent contrast for accessibility and readability.');
} else {
  console.log(`❌ ${failures.length} combinations FAIL WCAG AA standards:\\n`);
  failures.forEach((fail, i) => {
    console.log(`   ${i + 1}. ${fail.name}`);
    console.log(`      ${fail.foreground} on ${fail.background} = ${fail.ratio}:1`);
    console.log(`      Required: ${fail.type === 'normal' ? '4.5:1' : '3:1'}\\n`);
  });
  console.log('⚠️  These combinations need adjustment to meet accessibility standards.');
}

console.log('\\n' + '='.repeat(80) + '\\n');

process.exit(allPass ? 0 : 1);
