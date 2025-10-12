import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  alt: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "3:4";
  label: string;
  className?: string;
}

export const ImagePlaceholder = ({ 
  alt, 
  aspectRatio = "16:9", 
  label,
  className = "" 
}: ImagePlaceholderProps) => {
  const aspectRatioClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "3:4": "aspect-[3/4]"
  };

  return (
    <div 
      className={`relative ${aspectRatioClasses[aspectRatio]} bg-muted/20 border-2 border-dashed border-primary/30 rounded-lg overflow-hidden flex items-center justify-center ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="relative z-10 text-center p-6 flex flex-col items-center justify-center gap-3">
        <ImageIcon className="w-12 h-12 text-primary/40" />
        <div className="space-y-1">
          <p className="font-heading text-sm font-semibold text-foreground/60">
            {label}
          </p>
          <p className="font-body text-xs text-muted-foreground/50">
            Replace with: {alt}
          </p>
        </div>
      </div>
    </div>
  );
};
