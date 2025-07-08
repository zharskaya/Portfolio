import React, { useState, useRef, useEffect, useCallback } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageZoomProps extends ImageProps {
  alt: string;
  className?: string;
}

export function ImageZoom({ alt, className = '', ...props }: ImageZoomProps) {
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
      <Image
        {...props}
        alt={alt}
        className={
          (className ? className + ' ' : '') +
          'object-contain w-full h-auto block rounded-sm cursor-zoom-in transition-transform duration-200 hover:scale-105'
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
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 overflow-y-auto"
            initial={{ scale: 0.92, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="fixed top-4 right-4 text-white text-2xl font-bold z-50 focus:outline-none focus:ring bg-black/60 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => {
                setOpen(false);
                if (lastActive.current) lastActive.current.focus();
              }}
              aria-label="Close"
              tabIndex={0}
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.04 }}
              className="flex items-center justify-center w-full h-full"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 