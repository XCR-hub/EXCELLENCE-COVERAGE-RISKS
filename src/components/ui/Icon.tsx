import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'light' | 'dark';
  className?: string;
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

const colorMap = {
  primary: 'text-primary-600',
  secondary: 'text-secondary-400',
  accent: 'text-accent-400',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  error: 'text-red-500',
  info: 'text-blue-500',
  light: 'text-gray-200',
  dark: 'text-gray-800',
};

export const Icon = ({ name, size = 'md', color = 'primary', className = '' }: IconProps) => {
  const IconComponent = LucideIcons[name] as LucideIcon;
  
  if (!IconComponent) {
    console.error(`Icon "${name}" not found in Lucide icons`);
    return null;
  }
  
  return (
    <IconComponent className={`${sizeMap[size]} ${colorMap[color]} ${className}`} />
  );
};

export const getIconForMetier = (metier: string): IconName => {
  const metierIconMap: Record<string, IconName> = {
    'macon': 'Building2',
    'electricien': 'Zap',
    'plombier': 'Droplet',
    'charpentier': 'Hammer',
    'couvreur': 'Cloud',
    'chauffagiste': 'Flame',
    'menuisier': 'PenTool',
    'carreleur': 'Grid',
    'terrassier': 'Shovel',
    'betonneur': 'Building',
    'ferrailleur': 'Wrench',
    'demolisseur': 'Hammer',
    'plaquiste': 'Square',
    'peintre': 'Paintbrush',
    'platrier': 'Brush',
    'solier': 'Layers',
    'cuisiniste': 'Utensils',
    'serrurier': 'Key',
    'etancheur': 'Droplets',
    'isolateur': 'Thermometer',
    'ravaleur': 'Brush',
    'pisciniste': 'Waves',
    'photovoltaique': 'Sun',
    'ascensoriste': 'ArrowUpDown',
    'antenniste': 'Antenna',
    'alarme-securite': 'Bell',
    'automatisme': 'Cog'
  };

  return metierIconMap[metier] || 'Tool';
};