import { useEffect } from 'react';

interface BrokenElement {
  element: string;
  location: string;
  currentBehavior: string;
  expectedBehavior: string;
  fixed: boolean;
}

const InteractiveElementsValidator = () => {
  useEffect(() => {
    const validateElements = () => {
      const brokenElements: BrokenElement[] = [];
      
      // Check all links
      const links = document.querySelectorAll('a');
      links.forEach((link, index) => {
        const href = link.getAttribute('href');
        const text = link.textContent?.trim();
        
        // Check for broken internal links
        if (href && href.startsWith('/') && !href.includes('#')) {
          // These should be valid routes
          const validRoutes = [
            '/', '/contact', '/assurance-auto', '/assurance-decennale',
            '/assurance-emprunteur', '/protection-juridique', '/blog'
          ];
          
          if (!validRoutes.some(route => href.startsWith(route))) {
            brokenElements.push({
              element: `Link: "${text}"`,
              location: `href="${href}"`,
              currentBehavior: 'May lead to 404',
              expectedBehavior: 'Should navigate to valid page',
              fixed: false
            });
          }
        }
        
        // Check for empty href
        if (!href || href === '#') {
          brokenElements.push({
            element: `Link: "${text}"`,
            location: `Link index ${index}`,
            currentBehavior: 'No navigation',
            expectedBehavior: 'Should have valid href',
            fixed: false
          });
        }
      });
      
      // Check all buttons
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button, index) => {
        const text = button.textContent?.trim();
        const onClick = button.getAttribute('onclick');
        const type = button.getAttribute('type');
        
        // Check for buttons without proper handlers
        if (!onClick && type !== 'submit' && !button.closest('form')) {
          // Check if it has event listeners
          const hasEventListeners = button.onclick || 
            button.addEventListener.toString() !== 'function addEventListener() { [native code] }';
          
          if (!hasEventListeners) {
            brokenElements.push({
              element: `Button: "${text}"`,
              location: `Button index ${index}`,
              currentBehavior: 'No action on click',
              expectedBehavior: 'Should have click handler',
              fixed: false
            });
          }
        }
      });
      
      // Check forms
      const forms = document.querySelectorAll('form');
      forms.forEach((form, index) => {
        const action = form.getAttribute('action');
        const method = form.getAttribute('method');
        const onSubmit = form.getAttribute('onsubmit');
        
        if (!action && !onSubmit && !form.onsubmit) {
          brokenElements.push({
            element: 'Form',
            location: `Form index ${index}`,
            currentBehavior: 'No submit handler',
            expectedBehavior: 'Should have action or onSubmit',
            fixed: false
          });
        }
      });
      
      // Log results
      if (brokenElements.length > 0) {
        console.group('🔍 Interactive Elements Validation Report');
        console.warn(`Found ${brokenElements.length} potentially broken elements:`);
        brokenElements.forEach((element, index) => {
          console.log(`${index + 1}. ${element.element}`);
          console.log(`   Location: ${element.location}`);
          console.log(`   Current: ${element.currentBehavior}`);
          console.log(`   Expected: ${element.expectedBehavior}`);
          console.log('   ---');
        });
        console.groupEnd();
      } else {
        console.log('✅ All interactive elements appear to be working correctly');
      }
      
      return brokenElements;
    };
    
    // Run validation after page load
    const timer = setTimeout(validateElements, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return null;
};

export default InteractiveElementsValidator;