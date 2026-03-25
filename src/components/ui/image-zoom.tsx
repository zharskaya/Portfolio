import React, { useState, useRef, useEffect, useCallback } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "@/components/ui/icons";

interface ImageZoomProps extends ImageProps {
  alt: string;
  className?: string;
  caption?: string;
}

export function ImageZoom({ alt, className = '', caption, ...props }: ImageZoomProps) {
  const [open, setOpen] = useState(false);
  const lastActive = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [fitMode, setFitMode] = useState<'fit-width' | 'fit-height' | 'natural'>('fit-width');
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(null);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Focus management, ESC to close, Tab trap
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.key === 'Tab') {
        e.preventDefault();
        closeButtonRef.current?.focus();
      }
    }
    if (open) {
      window.addEventListener('keydown', handleKey);
      closeButtonRef.current?.focus();
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
      <div
        className="group relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
      >
        <Image
          {...props}
          alt={alt}
          className={
            (className ? className + ' ' : '') +
            'object-contain w-full h-auto block cursor-pointer'
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
          {hovered && (
            <motion.div
              className="absolute pointer-events-none z-10 bg-foreground text-primary-foreground text-xs font-mono uppercase px-2 py-1 rounded-sm whitespace-nowrap"
              style={{
                left: mousePos.x,
                top: mousePos.y,
                transform: 'translate(-50%, -130%)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              View full screen
            </motion.div>
          )}
        </AnimatePresence>
        {caption && (
          <figcaption>
            {caption}
          </figcaption>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => { setOpen(false); if (lastActive.current) lastActive.current.focus(); }}
          >
            <button
              ref={closeButtonRef}
              className="fixed top-4 right-4 text-primary-foreground z-50 focus:outline-none focus:ring bg-foreground/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-foreground transition-colors"
              onClick={() => {
                setOpen(false);
                if (lastActive.current) lastActive.current.focus();
              }}
              aria-label="Close image preview"
            >
              <XIcon size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
              className="flex flex-col items-center justify-center w-full h-full"
              onClick={e => e.stopPropagation()}
            >
              <Image
                {...props}
                alt={alt}
                className="shadow-lg object-contain"
                style={
                  fitMode === 'fit-width'
                    ? { width: '100%', height: 'auto', maxWidth: '100%', maxHeight: 'none', objectFit: 'contain' }
                    : fitMode === 'fit-height'
                    ? { height: '100vh', width: 'auto', maxHeight: '100vh', maxWidth: '100%', objectFit: 'contain' }
                    : { width: naturalSize?.width, height: naturalSize?.height, objectFit: 'contain' }
                }
                priority={false}
                onLoad={e => {
                  const img = e.currentTarget;
                  setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
                  updateFitMode(img.naturalWidth, img.naturalHeight);
                }}
              />
              {caption && (
                <figcaption className="text-center mt-4 text-sm text-primary-foreground">
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