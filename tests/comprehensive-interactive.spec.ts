import { test, expect } from '@playwright/test';

test.describe('Comprehensive Interactive Elements Testing', () => {
  
  // Test de la navigation principale
  test('should test main navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation header
    await expect(page.locator('header nav')).toBeVisible();
    
    // Test each navigation link
    const navLinks = [
      { text: 'Accueil', url: '/' },
      { text: 'Auto', url: '/assurance-auto' },
      { text: 'Décennale', url: '/assurance-decennale' },
      { text: 'Emprunteur', url: '/assurance-emprunteur' },
      { text: 'Juridique', url: '/protection-juridique' },
      { text: 'Blog', url: '/blog' },
      { text: 'Contact', url: '/contact' }
    ];
    
    for (const link of navLinks) {
      await page.click(`text=${link.text}`);
      await expect(page).toHaveURL(new RegExp(link.url.replace('/', '\\/')));
      await page.goBack();
    }
  });

  // Test des liens du footer
  test('should test footer links', async ({ page }) => {
    await page.goto('/');
    
    // Test footer service links
    const footerServiceLinks = [
      'Assurance Auto',
      'Assurance Décennale', 
      'Assurance Emprunteur',
      'Protection Juridique'
    ];
    
    for (const linkText of footerServiceLinks) {
      const link = page.locator(`footer a:has-text("${linkText}")`);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href');
    }
    
    // Test contact links
    await expect(page.locator('footer a[href^="tel:"]')).toHaveCount(2); // 2 phone numbers
    await expect(page.locator('footer a[href^="mailto:"]')).toHaveCount(5); // 5 email addresses
  });

  // Test des boutons CTA principaux
  test('should test main CTA buttons', async ({ page }) => {
    await page.goto('/');
    
    // Test hero CTA button
    const heroCTA = page.locator('text=Obtenir mon devis gratuit').first();
    await expect(heroCTA).toBeVisible();
    await heroCTA.click();
    // Should navigate to contact or form page
    await expect(page.url()).toMatch(/(contact|assurance)/);
  });

  // Test des formulaires de contact
  test('should test contact forms functionality', async ({ page }) => {
    // Test main contact form
    await page.goto('/contact');
    await expect(page.locator('form')).toBeVisible();
    
    // Test form validation
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Le prénom est requis')).toBeVisible();
    
    // Test successful form submission
    await page.fill('[name="firstName"]', 'Test');
    await page.fill('[name="lastName"]', 'User');
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="phone"]', '0123456789');
    await page.selectOption('[name="service"]', 'commercial');
    await page.fill('[name="subject"]', 'Test');
    await page.fill('[name="message"]', 'Test message');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    await expect(page.locator('.success-message')).toBeVisible({ timeout: 10000 });
  });

  // Test des formulaires d'assurance
  test('should test insurance forms', async ({ page }) => {
    const insurancePages = [
      '/assurance-auto',
      '/assurance-decennale', 
      '/assurance-emprunteur',
      '/protection-juridique'
    ];
    
    for (const pagePath of insurancePages) {
      await page.goto(pagePath);
      
      // Check if insurance form is present
      const form = page.locator('form').first();
      await expect(form).toBeVisible();
      
      // Test form validation
      await page.click('button[type="submit"]');
      await expect(page.locator('text=requis')).toHaveCount({ min: 1 });
    }
  });

  // Test des liens de blog
  test('should test blog functionality', async ({ page }) => {
    await page.goto('/blog');
    
    // Check blog posts are displayed
    await expect(page.locator('article')).toHaveCount({ min: 1 });
    
    // Test blog post navigation
    const firstPostLink = page.locator('text=Lire l\'article').first();
    await expect(firstPostLink).toBeVisible();
    await firstPostLink.click();
    
    // Should navigate to blog post
    await expect(page.url()).toMatch(/\/blog\/.+/);
    
    // Test back navigation
    await page.goBack();
    await expect(page.url()).toMatch(/\/blog$/);
  });

  // Test des liens externes
  test('should test external links', async ({ page }) => {
    await page.goto('/');
    
    // Test social media links in footer
    const socialLinks = page.locator('footer a[target="_blank"]');
    const count = await socialLinks.count();
    
    for (let i = 0; i < count; i++) {
      const link = socialLinks.nth(i);
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  // Test de la responsivité des éléments interactifs
  test('should test responsive interactive elements', async ({ page }) => {
    // Test mobile navigation
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if navigation is still functional on mobile
    await expect(page.locator('nav')).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload();
    await expect(page.locator('nav')).toBeVisible();
    
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.reload();
    await expect(page.locator('nav')).toBeVisible();
  });

  // Test des boutons de partage social
  test('should test social sharing buttons', async ({ page }) => {
    // Go to a blog post that should have sharing buttons
    await page.goto('/blog/devis-assurance-auto-2025');
    
    // Check for social sharing buttons
    const shareButtons = page.locator('button[aria-label*="Partager"]');
    const count = await shareButtons.count();
    
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        await expect(shareButtons.nth(i)).toBeVisible();
      }
    }
  });

  // Test des liens de téléchargement
  test('should test download links', async ({ page }) => {
    await page.goto('/');
    
    // Look for any download links (PDFs, guides, etc.)
    const downloadLinks = page.locator('a[href$=".pdf"], a[download]');
    const count = await downloadLinks.count();
    
    for (let i = 0; i < count; i++) {
      const link = downloadLinks.nth(i);
      await expect(link).toBeVisible();
      // Verify the link has proper attributes
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  // Test des boutons d'action secondaires
  test('should test secondary action buttons', async ({ page }) => {
    await page.goto('/');
    
    // Test "En savoir plus" buttons
    const learnMoreButtons = page.locator('text=En savoir plus');
    const count = await learnMoreButtons.count();
    
    for (let i = 0; i < Math.min(count, 3); i++) { // Test first 3 to avoid too many navigations
      const button = learnMoreButtons.nth(i);
      await expect(button).toBeVisible();
      
      // Click and verify navigation
      await button.click();
      await page.waitForLoadState('networkidle');
      
      // Should navigate somewhere
      expect(page.url()).not.toBe('/');
      
      // Go back for next test
      await page.goBack();
    }
  });

  // Test des éléments d'accessibilité
  test('should test accessibility features', async ({ page }) => {
    await page.goto('/');
    
    // Test skip link
    const skipLink = page.locator('.skip-link');
    if (await skipLink.count() > 0) {
      await expect(skipLink).toHaveAttribute('href', '#main-content');
    }
    
    // Test focus management
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  // Test des erreurs 404
  test('should test 404 error handling', async ({ page }) => {
    await page.goto('/page-inexistante');
    
    // Should show 404 page
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.locator('text=Page non trouvée')).toBeVisible();
    
    // Test return to home link
    const homeLink = page.locator('text=Retour à l\'accueil');
    await expect(homeLink).toBeVisible();
    await homeLink.click();
    await expect(page).toHaveURL('/');
  });

  // Test des performances des interactions
  test('should test interaction performance', async ({ page }) => {
    await page.goto('/');
    
    // Measure navigation performance
    const startTime = Date.now();
    await page.click('text=Contact');
    await page.waitForLoadState('networkidle');
    const endTime = Date.now();
    
    // Navigation should be reasonably fast (under 3 seconds)
    expect(endTime - startTime).toBeLessThan(3000);
  });
});

// Test spécifique pour les éléments défectueux identifiés
test.describe('Broken Elements Repair Tests', () => {
  
  test('should verify all critical links work', async ({ page }) => {
    const criticalLinks = [
      { path: '/', description: 'Homepage' },
      { path: '/contact', description: 'Contact page' },
      { path: '/assurance-auto', description: 'Auto insurance page' },
      { path: '/assurance-decennale', description: 'Decennale insurance page' },
      { path: '/assurance-emprunteur', description: 'Borrower insurance page' },
      { path: '/protection-juridique', description: 'Legal protection page' },
      { path: '/blog', description: 'Blog page' }
    ];
    
    for (const link of criticalLinks) {
      await page.goto(link.path);
      
      // Verify page loads successfully
      await expect(page.locator('body')).toBeVisible();
      
      // Verify no obvious error messages
      await expect(page.locator('text=Error')).toHaveCount(0);
      await expect(page.locator('text=404')).toHaveCount(0);
      
      console.log(`✅ ${link.description} loads correctly`);
    }
  });

  test('should verify all forms submit correctly', async ({ page }) => {
    // Test contact form
    await page.goto('/contact');
    
    await page.fill('[name="firstName"]', 'Test');
    await page.fill('[name="lastName"]', 'User');
    await page.fill('[name="email"]', 'test@example.com');
    await page.fill('[name="phone"]', '0123456789');
    await page.selectOption('[name="service"]', 'commercial');
    await page.fill('[name="subject"]', 'Test');
    await page.fill('[name="message"]', 'Test message');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    // Should show success message
    await expect(page.locator('.success-message')).toBeVisible({ timeout: 10000 });
    console.log('✅ Contact form submits correctly');
  });

  test('should verify all email and phone links work', async ({ page }) => {
    await page.goto('/contact');
    
    // Test phone links
    const phoneLinks = page.locator('a[href^="tel:"]');
    const phoneCount = await phoneLinks.count();
    
    for (let i = 0; i < phoneCount; i++) {
      const link = phoneLinks.nth(i);
      const href = await link.getAttribute('href');
      expect(href).toMatch(/^tel:\+?[\d\s-]+$/);
      console.log(`✅ Phone link ${i + 1} format is correct: ${href}`);
    }
    
    // Test email links
    const emailLinks = page.locator('a[href^="mailto:"]');
    const emailCount = await emailLinks.count();
    
    for (let i = 0; i < emailCount; i++) {
      const link = emailLinks.nth(i);
      const href = await link.getAttribute('href');
      expect(href).toMatch(/^mailto:.+@.+\..+$/);
      console.log(`✅ Email link ${i + 1} format is correct: ${href}`);
    }
  });
});