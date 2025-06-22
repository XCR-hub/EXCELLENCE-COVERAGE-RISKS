import { test, expect } from '@playwright/test';

test.describe('Contact Form Tests', () => {
  test('should validate required fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check for validation messages
    await expect(page.locator('text=Le prénom est requis')).toBeVisible();
    await expect(page.locator('text=Le nom est requis')).toBeVisible();
    await expect(page.locator('text=L\'email est requis')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.goto('/contact');
    
    await page.fill('[name="firstName"]', 'Jean');
    await page.fill('[name="lastName"]', 'Dupont');
    await page.fill('[name="email"]', 'invalid-email');
    await page.fill('[name="phone"]', '0123456789');
    await page.selectOption('[name="service"]', 'commercial');
    await page.fill('[name="subject"]', 'Test');
    await page.fill('[name="message"]', 'Message de test');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Format d\'email invalide')).toBeVisible();
  });

  test('should validate French phone number', async ({ page }) => {
    await page.goto('/contact');
    
    await page.fill('[name="firstName"]', 'Jean');
    await page.fill('[name="lastName"]', 'Dupont');
    await page.fill('[name="email"]', 'jean@test.fr');
    await page.fill('[name="phone"]', '123'); // Invalid phone
    await page.selectOption('[name="service"]', 'commercial');
    await page.fill('[name="subject"]', 'Test');
    await page.fill('[name="message"]', 'Message de test');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Numéro de téléphone français invalide')).toBeVisible();
  });

  test('should submit valid contact form', async ({ page }) => {
    await page.goto('/contact');
    
    await page.fill('[name="firstName"]', 'Jean');
    await page.fill('[name="lastName"]', 'Dupont');
    await page.fill('[name="email"]', 'jean.dupont@test.fr');
    await page.fill('[name="phone"]', '06 12 34 56 78');
    await page.selectOption('[name="service"]', 'commercial');
    await page.fill('[name="subject"]', 'Demande de devis');
    await page.fill('[name="message"]', 'Je souhaite obtenir un devis pour une assurance auto.');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    // Check for success message
    await expect(page.locator('text=Message envoyé !')).toBeVisible({ timeout: 10000 });
  });
});

test.describe('Insurance Form Tests', () => {
  test('should validate auto insurance form', async ({ page }) => {
    await page.goto('/assurance-auto');
    
    // Fill valid form data
    await page.fill('[name="firstName"]', 'Marie');
    await page.fill('[name="lastName"]', 'Martin');
    await page.fill('[name="email"]', 'marie.martin@test.fr');
    await page.fill('[name="phone"]', '01 23 45 67 89');
    await page.fill('[name="siret"]', '12345678901234');
    await page.fill('[name="coverageDetails"]', 'Véhicule Peugeot 308, usage personnel, conducteur principal 35 ans');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Demande envoyée !')).toBeVisible({ timeout: 10000 });
  });

  test('should validate decennale insurance form', async ({ page }) => {
    await page.goto('/assurance-decennale');
    
    await page.fill('[name="firstName"]', 'Pierre');
    await page.fill('[name="lastName"]', 'Durand');
    await page.fill('[name="email"]', 'pierre.durand@test.fr');
    await page.fill('[name="phone"]', '+33 6 12 34 56 78');
    await page.fill('[name="siret"]', '98765432109876');
    await page.fill('[name="coverageDetails"]', 'Entreprise de maçonnerie, CA 150k€, 8 ans d\'expérience');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Demande envoyée !')).toBeVisible({ timeout: 10000 });
  });

  test('should validate emprunteur insurance form', async ({ page }) => {
    await page.goto('/assurance-emprunteur');
    
    await page.fill('[name="firstName"]', 'Sophie');
    await page.fill('[name="lastName"]', 'Bernard');
    await page.fill('[name="email"]', 'sophie.bernard@test.fr');
    await page.fill('[name="phone"]', '0987654321');
    await page.fill('[name="coverageDetails"]', 'Prêt immobilier 300k€, 25 ans, couple 30-32 ans');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Demande envoyée !')).toBeVisible({ timeout: 10000 });
  });

  test('should validate juridique protection form', async ({ page }) => {
    await page.goto('/protection-juridique');
    
    await page.fill('[name="firstName"]', 'Laurent');
    await page.fill('[name="lastName"]', 'Petit');
    await page.fill('[name="email"]', 'laurent.petit@test.fr');
    await page.fill('[name="phone"]', '05 12 34 56 78');
    await page.fill('[name="coverageDetails"]', 'Protection juridique professionnelle, consultant IT');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Demande envoyée !')).toBeVisible({ timeout: 10000 });
  });

  test('should validate SIRET format', async ({ page }) => {
    await page.goto('/assurance-auto');
    
    await page.fill('[name="firstName"]', 'Test');
    await page.fill('[name="lastName"]', 'User');
    await page.fill('[name="email"]', 'test@test.fr');
    await page.fill('[name="phone"]', '0123456789');
    await page.fill('[name="siret"]', '123'); // Invalid SIRET
    await page.fill('[name="coverageDetails"]', 'Test coverage');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=SIRET invalide')).toBeVisible();
  });
});

test.describe('Navigation Tests', () => {
  test('should navigate through main pages', async ({ page }) => {
    // Test homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/XCR Courtier/);
    
    // Test navigation links
    await page.click('text=Auto');
    await expect(page).toHaveURL(/assurance-auto/);
    
    await page.click('text=Décennale');
    await expect(page).toHaveURL(/assurance-decennale/);
    
    await page.click('text=Emprunteur');
    await expect(page).toHaveURL(/assurance-emprunteur/);
    
    await page.click('text=Juridique');
    await expect(page).toHaveURL(/protection-juridique/);
    
    await page.click('text=Blog');
    await expect(page).toHaveURL(/blog/);
    
    await page.click('text=Contact');
    await expect(page).toHaveURL(/contact/);
  });

  test('should handle 404 pages', async ({ page }) => {
    await page.goto('/non-existent-page');
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.locator('text=Page non trouvée')).toBeVisible();
    
    // Test return to home link
    await page.click('text=Retour à l\'accueil');
    await expect(page).toHaveURL('/');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');
    
    // Check if mobile navigation works
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
  });
});

test.describe('Blog Tests', () => {
  test('should display blog posts', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('h1')).toContainText('Blog');
    
    // Check if blog posts are displayed
    await expect(page.locator('article')).toHaveCount(3);
  });

  test('should navigate to individual blog post', async ({ page }) => {
    await page.goto('/blog');
    
    // Click on first blog post
    await page.click('text=Lire l\'article >> nth=0');
    
    // Should navigate to blog post page
    await expect(page).toHaveURL(/\/blog\/.+/);
  });
});

test.describe('Accessibility Tests', () => {
  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for h1
    await expect(page.locator('h1')).toBeVisible();
    
    // Check for skip link
    await expect(page.locator('.skip-link')).toBeInViewport();
  });

  test('should have proper form labels', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that all form inputs have labels
    const inputs = page.locator('input[required]');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      if (id) {
        await expect(page.locator(`label[for="${id}"]`)).toBeVisible();
      }
    }
  });
});