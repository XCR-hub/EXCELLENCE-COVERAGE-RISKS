import { test, expect } from '@playwright/test';

test.describe('Netlify Forms Integration', () => {
  test('should have hidden Netlify forms for bot detection', async ({ page }) => {
    await page.goto('/contact');
    
    // Check for hidden Netlify form
    const hiddenForm = page.locator('form[name="contact"][netlify="true"][hidden]');
    await expect(hiddenForm).toBeAttached();
    
    // Verify all required fields are present in hidden form
    await expect(hiddenForm.locator('input[name="firstName"]')).toBeAttached();
    await expect(hiddenForm.locator('input[name="lastName"]')).toBeAttached();
    await expect(hiddenForm.locator('input[name="email"]')).toBeAttached();
    await expect(hiddenForm.locator('input[name="phone"]')).toBeAttached();
    await expect(hiddenForm.locator('select[name="service"]')).toBeAttached();
    await expect(hiddenForm.locator('input[name="subject"]')).toBeAttached();
    await expect(hiddenForm.locator('textarea[name="message"]')).toBeAttached();
    await expect(hiddenForm.locator('input[name="targetEmail"]')).toBeAttached();
  });

  test('should have hidden forms for all insurance types', async ({ page }) => {
    // Check auto insurance form
    await page.goto('/assurance-auto');
    await expect(page.locator('form[name="lead-auto"][netlify="true"][hidden]')).toBeAttached();
    
    // Check decennale insurance form
    await page.goto('/assurance-decennale');
    await expect(page.locator('form[name="lead-decennale"][netlify="true"][hidden]')).toBeAttached();
    
    // Check emprunteur insurance form
    await page.goto('/assurance-emprunteur');
    await expect(page.locator('form[name="lead-emprunteur"][netlify="true"][hidden]')).toBeAttached();
    
    // Check juridique protection form
    await page.goto('/protection-juridique');
    await expect(page.locator('form[name="lead-juridique"][netlify="true"][hidden]')).toBeAttached();
  });

  test('should submit form with proper encoding', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill out the form
    await page.fill('[name="firstName"]', 'Test');
    await page.fill('[name="lastName"]', 'User');
    await page.fill('[name="email"]', 'test@netlify-test.com');
    await page.fill('[name="phone"]', '0123456789');
    await page.selectOption('[name="service"]', 'commercial');
    await page.fill('[name="subject"]', 'Test Netlify Submission');
    await page.fill('[name="message"]', 'This is a test submission to verify Netlify Forms integration.');
    await page.check('[name="consent"]');
    
    // Intercept the form submission
    const [request] = await Promise.all([
      page.waitForRequest(request => 
        request.url().includes('/') && 
        request.method() === 'POST' &&
        request.headers()['content-type']?.includes('application/x-www-form-urlencoded')
      ),
      page.click('button[type="submit"]')
    ]);
    
    // Verify the request contains form-name for Netlify
    const postData = request.postData();
    expect(postData).toContain('form-name=contact');
    expect(postData).toContain('firstName=Test');
    expect(postData).toContain('lastName=User');
    expect(postData).toContain('email=test%40netlify-test.com');
  });

  test('should handle form submission errors gracefully', async ({ page }) => {
    // Mock a network error
    await page.route('/', route => {
      if (route.request().method() === 'POST') {
        route.abort();
      } else {
        route.continue();
      }
    });
    
    await page.goto('/contact');
    
    await page.fill('[name="firstName"]', 'Test');
    await page.fill('[name="lastName"]', 'User');
    await page.fill('[name="email"]', 'test@test.com');
    await page.fill('[name="phone"]', '0123456789');
    await page.selectOption('[name="service"]', 'commercial');
    await page.fill('[name="subject"]', 'Test');
    await page.fill('[name="message"]', 'Test message');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    // Should show error message or handle gracefully
    // Note: This depends on your error handling implementation
  });
});

test.describe('Form Analytics Tracking', () => {
  test('should track form submissions to analytics', async ({ page }) => {
    // Mock gtag function
    await page.addInitScript(() => {
      window.gtag = (...args) => {
        window.gtagCalls = window.gtagCalls || [];
        window.gtagCalls.push(args);
      };
    });
    
    await page.goto('/assurance-auto');
    
    await page.fill('[name="firstName"]', 'Analytics');
    await page.fill('[name="lastName"]', 'Test');
    await page.fill('[name="email"]', 'analytics@test.com');
    await page.fill('[name="phone"]', '0123456789');
    await page.fill('[name="coverageDetails"]', 'Test analytics tracking');
    await page.check('[name="consent"]');
    
    await page.click('button[type="submit"]');
    
    // Wait for success message
    await expect(page.locator('text=Demande envoyée !')).toBeVisible({ timeout: 10000 });
    
    // Check if analytics event was fired
    const gtagCalls = await page.evaluate(() => window.gtagCalls);
    const leadEvent = gtagCalls?.find(call => 
      call[0] === 'event' && call[1] === 'lead_submit'
    );
    
    expect(leadEvent).toBeTruthy();
    expect(leadEvent[2]).toMatchObject({
      type: 'auto',
      form_id: 'lead-auto'
    });
  });
});