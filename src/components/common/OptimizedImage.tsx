import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  sizes = '100vw'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and AVIF sources
  const getOptimizedSrc = (format: 'webp' | 'avif') => {
    if (src.includes('pexels.com')) {
      // For Pexels images, we can't convert format but can optimize size
      return src;
    }
    // For local images, assume we have optimized versions
    return src.replace(/\.(jpg|jpeg|png)$/i, `.${format}`);
  };

  useEffect(() => {
    if (priority && imgRef.current) {
      // Preload critical images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-500 text-sm">Image non disponible</span>
      </div>
    );
  }

  return (
    <picture>
      {/* AVIF format for modern browsers */}
      <source 
        srcSet={getOptimizedSrc('avif')} 
        type="image/avif"
        sizes={sizes}
      />
      
      {/* WebP format for most browsers */}
      <source 
        srcSet={getOptimizedSrc('webp')} 
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback to original format */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        sizes={sizes}
      />
    </picture>
  );
};

export default OptimizedImage;