interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export default function Figure({ src, alt, caption, className = '' }: FigureProps) {
  return (
    <figure className={`space-y-3 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain rounded-lg"
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-center text-sm text-foreground/70 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
