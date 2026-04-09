import { useState, useEffect } from "react";

interface Props {
  image: string;
  id: string;
}

export function ProductImageViewer({ image, id }: Props) {
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center" });
  const [open, setOpen] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Main image */}
      <div
        className="aspect-square bg-muted overflow-hidden cursor-zoom-in"
        onMouseMove={handleMove}
        onClick={() => setOpen(true)}
      >
        <img
          src={image}
          alt={id}
          style={zoomStyle}
          className="w-full h-full object-cover transition-transform duration-200 md:hover:scale-150"
        />
      </div>

      {/* Fullscreen modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 overflow-auto"
          onClick={() => setOpen(false)}
        >
          <img
            src={image}
            alt={id}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}