import React, { useState, useRef, useEffect, useCallback } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageZoomProps extends ImageProps {
  alt: string;
  className?: string;
  caption?: string;
}

export function ImageZoom({ alt, className = '', caption, ...props }: ImageZoomProps) {
  const [open, setOpen] = useState(false);
  const lastActive = useRef<HTMLElement | null>(null);
  const [fitMode, setFitMode] = useState<'fit-width' | 'fit-height' | 'natural'>('fit-width');
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Focus management and ESC to close
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      window.addEventListener('keydown', handleKey);
    } else {
      window.removeEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  // Smart fit logic
  const updateFitMode = useCallback((imgWidth: number, imgHeight: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (imgWidth <= vw && imgHeight <= vh) {
      setFitMode('natural');
    } else if (imgWidth / imgHeight > vw / vh) {
      setFitMode('fit-width');
    } else {
      setFitMode('fit-height');
    }
  }, []);

  // When modal opens, recalc fit mode
  useEffect(() => {
    if (open && naturalSize) {
      updateFitMode(naturalSize.width, naturalSize.height);
    }
    // Also update on resize
    function handleResize() {
      if (open && naturalSize) updateFitMode(naturalSize.width, naturalSize.height);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open, naturalSize, updateFitMode]);

  return (
    <>
      <div className="group cursor-zoom-in">
        <Image
          {...props}
          alt={alt}
          className={
            (className ? className + ' ' : '') +
            'object-contain w-full h-auto block rounded-sm transition-transform duration-200 group-hover:scale-105'
          }
          onClick={e => {
            lastActive.current = e.currentTarget as HTMLElement;
            setOpen(true);
          }}
          tabIndex={0}
          onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpen(true); }}
          role="button"
          aria-label={`Zoom ${alt}`}
        />
        {caption && (
          <figcaption className="text-center mt-2 leading-snug text-xs font-medium tracking-wide text-muted-foreground transition-transform duration-200 group-hover:scale-105">
            {caption}
          </figcaption>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="fixed top-4 right-4 text-white z-50 focus:outline-none focus:ring bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition-colors"
              onClick={() => {
                setOpen(false);
                if (lastActive.current) lastActive.current.focus();
              }}
              aria-label="Close"
              tabIndex={0}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <Image
                {...props}
                alt={alt}
                className="rounded-lg shadow-lg object-contain"
                style={
                  fitMode === 'fit-width'
                    ? { width: '100vw', height: 'auto', maxWidth: '100vw', maxHeight: 'none', objectFit: 'contain' }
                    : fitMode === 'fit-height'
                    ? { height: '100vh', width: 'auto', maxHeight: '100vh', maxWidth: 'none', objectFit: 'contain' }
                    : { width: naturalSize?.width, height: naturalSize?.height, objectFit: 'contain' }
                }
                priority={false}
                onLoadingComplete={img => {
                  setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
                  updateFitMode(img.naturalWidth, img.naturalHeight);
                }}
              />
              {caption && (
                <figcaption className="text-center mt-4 text-sm font-medium text-white">
                  {caption}
                </figcaption>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 