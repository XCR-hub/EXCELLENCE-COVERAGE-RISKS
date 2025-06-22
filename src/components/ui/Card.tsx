import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'filled';
  onClick?: () => void;
}

export const Card = ({ 
  title, 
  description, 
  icon, 
  children, 
  className = '',
  variant = 'default',
  onClick
}: CardProps) => {
  const variantClasses = {
    default: 'bg-white shadow-lg',
    outline: 'bg-white border border-gray-200',
    filled: 'bg-gray-50',
  };
  
  return (
    <div 
      className={`rounded-lg p-6 ${variantClasses[variant]} ${className} ${onClick ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''}`}
      onClick={onClick}
    >
      {icon && (
        <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      {title && <h3 className="text-xl font-bold text-primary-800 mb-3">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export const FeatureCard = ({
  icon,
  title,
  description,
  className = '',
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <Card className={`text-center ${className}`} variant="default">
      <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export const TestimonialCard = ({
  name,
  company,
  text,
  rating,
  avatar,
  className = '',
}: {
  name: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
  className?: string;
}) => {
  return (
    <Card className={className} variant="default">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-primary-800">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
        <div className="ml-auto flex">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </Card>
  );
};