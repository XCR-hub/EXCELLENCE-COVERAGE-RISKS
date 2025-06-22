import { test, expect } from '@playwright/test';

test.describe('Contact Form Tests', () => {
  test('should submit contact form successfully', async ({ page }) => {
    // Accéder à la page de contact
    await page.goto('/contact');
    
    // Vérifier que la page est chargée
    await expect(page).toHaveTitle(/Contact XCR Courtier/);
    
    // Remplir les champs requis
    await page.fill('[name="firstName"]', 'Jean');
    await page.fill('[name="email"]', 'jean.test@example.com');
    await page.fill('[name="message"]', 'Ceci est un message de test pour vérifier le formulaire de contact.');
    
    // Soumettre le formulaire
    await page.click('button[type="submit"]');
    
    // Vérifier l'apparition du message de succès
    await expect(page.locator('.success-message')).toBeVisible({ timeout: 10000 });
    
    // Vérifier le contenu du message de succès
    await expect(page.locator('.success-message')).toContainText('Message envoyé !');
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Essayer de soumettre le formulaire vide
    await page.click('button[type="submit"]');
    
    // Vérifier les messages de validation
    await expect(page.locator('text=Le prénom est requis')).toBeVisible();
    await expect(page.locator('text=L\'email est requis')).toBeVisible();
    await expect(page.locator('text=Le message est requis')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.goto('/contact');
    
    await page.fill('[name="firstName"]', 'Jean');
    await page.fill('[name="email"]', 'email-invalide');
    await page.fill('[name="message"]', 'Message de test');
    
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Format d\'email invalide')).toBeVisible();
  });

  test('should handle form submission with all fields', async ({ page }) => {
    await page.goto('/contact');
    
    // Remplir tous les champs du formulaire
    await page.fill('[name="firstName"]', 'Marie');
    await page.fill('[name="lastName"]', 'Dupont');
    await page.fill('[name="email"]', 'marie.dupont@test.fr');
    await page.fill('[name="phone"]', '06 12 34 56 78');
    await page.selectOption('[name="service"]', 'commercial');
    await page.fill('[name="subject"]', 'Demande de renseignements');
    await page.fill('[name="message"]', 'Je souhaite obtenir des informations sur vos services d\'assurance.');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    // Vérifier le succès de la soumission
    await expect(page.locator('.success-message')).toBeVisible({ timeout: 10000 });
  });
});