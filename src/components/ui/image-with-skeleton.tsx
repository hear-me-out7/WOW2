import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  skeletonClassName?: string;
}

export const ImageWithSkeleton = ({
  src,
  alt,
  className,
  skeletonClassName,
  ...props
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <Skeleton className={cn("absolute inset-0", skeletonClassName)} />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          className,
          !isLoaded && "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};
