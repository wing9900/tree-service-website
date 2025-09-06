import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
  width?: number;
  height?: number;
  aspectRatio?: string;
  onLoad?: () => void;
  onError?: () => void;
  blur?: boolean;
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  lazy = true,
  width,
  height,
  aspectRatio,
  onLoad,
  onError,
  blur = true,
  quality = 85
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, lazy]);

  // Generate WebP source with fallback
  const getWebPSource = (originalSrc: string) => {
    if (originalSrc.includes('.png') || originalSrc.includes('.jpg') || originalSrc.includes('.jpeg')) {
      return originalSrc.replace(/\.(png|jpg|jpeg)$/, '.webp');
    }
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const containerStyle: React.CSSProperties = aspectRatio ? { aspectRatio } : {};
  if (width) containerStyle.width = width;
  if (height) containerStyle.height = height;

  return (
    <div 
      ref={imgRef} 
      className={cn("relative overflow-hidden", className)}
      style={containerStyle}
    >
      {/* Loading skeleton */}
      {!isLoaded && isInView && blur && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {/* Actual image */}
      {isInView && (
        <picture>
          {/* WebP source for modern browsers */}
          <source 
            srcSet={getWebPSource(src)} 
            type="image/webp"
          />
          
          {/* Fallback for older browsers */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0",
              hasError && "opacity-50"
            )}
            onLoad={handleLoad}
            onError={handleError}
          />
        </picture>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export { OptimizedImage };