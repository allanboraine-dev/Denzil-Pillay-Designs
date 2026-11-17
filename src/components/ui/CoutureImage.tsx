"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type CoutureImageProps = Omit<React.ComponentProps<typeof Image>, "src"> & {
  src: string;
  fallbackSrc?: string;
  containerClassName?: string;
};

export function CoutureImage({
  src,
  fallbackSrc = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  alt,
  className,
  containerClassName,
  priority = false,
  ...props
}: CoutureImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageSrc = hasError ? fallbackSrc : currentSrc;

  return (
    <div className={cn("relative overflow-hidden bg-velvet", containerClassName)}>
      {/* Subtle luxury shimmer placeholder while loading */}
      {isLoading && (
        <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-tr from-obsidian via-velvet to-[#1f1f26]" />
      )}
      <Image
        {...props}
        src={imageSrc}
        alt={alt}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setCurrentSrc(fallbackSrc);
            setIsLoading(false);
          }
        }}
        className={cn(
          "h-full w-full object-cover transition-all duration-700 ease-out",
          isLoading ? "scale-105 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0",
          className
        )}
      />
    </div>
  );
}
