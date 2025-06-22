import { useEffect } from 'react';

const AccessibilityEnhancements = () => {
  useEffect(() => {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Aller au contenu principal';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-800 text-white px-4 py-2 rounded z-50';
    skipLink.setAttribute('tabindex', '0');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Focus management for modals and dropdowns
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
        if (activeModal) {
          const closeButton = activeModal.querySelector('[aria-label*="fermer"], [aria-label*="close"]') as HTMLElement;
          closeButton?.click();
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    // Announce page changes for screen readers
    const announcePageChange = () => {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page chargée: ${document.title}`;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Announce on route changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === document.head) {
          const titleElement = document.querySelector('title');
          if (titleElement) {
            announcePageChange();
          }
        }
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });

    // Enhanced focus indicators
    const addFocusStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        *:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        *:focus:not(:focus-visible) {
          outline: none !important;
        }
        
        *:focus-visible {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }
        
        .focus-trap {
          position: relative;
        }
        
        .focus-trap::before,
        .focus-trap::after {
          content: '';
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }
      `;
      document.head.appendChild(style);
    };

    addFocusStyles();

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default AccessibilityEnhancements;