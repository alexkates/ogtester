/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react";

function OgImage(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) {
  const { src, alt, className, ...rest } = props;
  return (
    <img
      src={src ?? "/no-image-found.png"}
      alt={alt}
      className={cn("rounded-lg", className)}
      {...rest}
    />
  );
}

export default OgImage;
