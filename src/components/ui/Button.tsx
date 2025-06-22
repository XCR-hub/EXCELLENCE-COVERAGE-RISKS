import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  loading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
  ariaLabel,
  loading = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-800 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-400 text-white hover:bg-secondary-500 focus:ring-secondary-300',
    accent: 'bg-accent-400 text-white hover:bg-accent-500 focus:ring-accent-300',
    outline: 'bg-transparent border-2 border-current text-primary-800 hover:bg-primary-50',
    ghost: 'bg-transparent hover:bg-gray-100 text-primary-800',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };
  
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} ${className}`;
  
  // Wrap with motion for subtle hover effect
  const MotionComponent = motion.div;
  
  const buttonContent = (
    <>
      {loading && (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
      )}
      {children}
    </>
  );
  
  if (href) {
    if (external) {
      return (
        <MotionComponent whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
          <a
            href={href}
            className={allClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            onClick={disabled ? undefined : onClick}
          >
            {buttonContent}
          </a>
        </MotionComponent>
      );
    }
    
    return (
      <MotionComponent whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
        <Link 
          to={href} 
          className={allClasses}
          aria-label={ariaLabel}
          onClick={disabled ? undefined : onClick}
        >
          {buttonContent}
        </Link>
      </MotionComponent>
    );
  }
  
  return (
    <MotionComponent whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
      <button
        type={type}
        className={allClasses}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {buttonContent}
      </button>
    </MotionComponent>
  );
};

export default Button;