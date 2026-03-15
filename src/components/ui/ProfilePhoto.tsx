"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ProfilePhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProfilePhoto({
  src,
  alt,
  className,
  priority = false,
  sizes,
}: ProfilePhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn(
        "object-cover object-top grayscale-[25%] transition-all duration-700",
        className
      )}
      priority={priority}
      sizes={sizes}
    />
  );
}
