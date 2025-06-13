"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

interface ZoomTransitionProps {
  children: React.ReactNode;
  href: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export default function ZoomTransition({
  children,
  href,
  imageSrc,
  imageAlt,
  className = "",
}: ZoomTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [initialRect, setInitialRect] = useState<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();

      if (!containerRef.current) return;

      // Get the clicked element's position and dimensions
      const rect = containerRef.current.getBoundingClientRect();
      const imageElement = containerRef.current.querySelector("img");
      const imageRect = imageElement?.getBoundingClientRect();

      setInitialRect(imageRect || rect);
      setIsTransitioning(true);

      // Navigate after animation completes
      setTimeout(() => {
        router.push(href);
      }, 1200); // Longer duration for more cinematic effect
    },
    [href, router]
  );

  return (
    <>
      <div
        ref={containerRef}
        className={`cursor-pointer ${className}`}
        onClick={handleClick}
      >
        {children}
      </div>

      <AnimatePresence>
        {isTransitioning && initialRect && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Main zoom element */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-2xl"
              initial={{
                width: initialRect.width,
                height: initialRect.height,
                x:
                  initialRect.left -
                  window.innerWidth / 2 +
                  initialRect.width / 2,
                y:
                  initialRect.top -
                  window.innerHeight / 2 +
                  initialRect.height / 2,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
              }}
              animate={{
                width: Math.min(window.innerWidth * 0.9, 1000),
                height: Math.min(window.innerHeight * 0.9, 700),
                x: 0,
                y: 0,
                scale: 1.1,
                rotateX: 2,
                rotateY: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                scale: {
                  delay: 0.2,
                  duration: 1.0,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />

              {/* Animated overlay gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              />

              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </motion.div>

            {/* Enhanced loading indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 text-white backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full">
                <motion.div
                  className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                <span className="font-ubuntu text-sm font-medium text-black">
                  Entering experience...
                </span>
              </div>
            </motion.div>

            {/* Particle effects */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: window.innerWidth / 2,
                  y: window.innerHeight / 2,
                  opacity: 0,
                }}
                animate={{
                  x: window.innerWidth / 2 + (Math.random() - 0.5) * 400,
                  y: window.innerHeight / 2 + (Math.random() - 0.5) * 400,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: 0.4 + i * 0.1,
                  duration: 1.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
