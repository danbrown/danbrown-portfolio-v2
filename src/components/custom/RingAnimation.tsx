import { useState, useEffect } from "react";
import { useWidth } from "@wipsie/ui";
import { motion, AnimatePresence } from "framer-motion";

export const RingAnimation = ({
  visible = true,
  totalRings = 5,
  scale = 0.5,
  animationDuration = 1,
  firstColor = "#000",
  secondColor = "#fff",
}) => {
  const [animationEnded, setAnimationEnded] = useState(!visible);

  useEffect(() => {
    if (visible) {
      setAnimationEnded(false);
    }
  }, [visible]);

  const rings = [];
  for (let i = 0; i < totalRings; i++) {
    const size = 500 * (scale * (i + 1));

    rings.push(
      <motion.div
        key={i}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: i % 2 === 0 ? firstColor : secondColor,
          left: `calc(50% - ${size / 2}px)`,
          position: "absolute",
          top: `calc(50% - ${size / 2}px)`,
          transformOrigin: "50% 50%",
          transformStyle: "flat",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform", // Promote the element to a new layer
          opacity: 1, // Reduced opacity to avoid flickering
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        onAnimationComplete={() => {
          if (i === totalRings - 1) {
            setAnimationEnded(true);
          }
        }}
        transition={{
          duration: animationDuration,
          // repeat: Infinity,
          // repeatType: "reverse",
          ease: "linear",
          delay: i * (animationDuration / totalRings),
        }}
      />
    );
  }

  return (
    <AnimatePresence mode="wait">
      {animationEnded ? null : (
        <motion.div
          key="ring-animation-container"
          style={{
            height: "100%",
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0,
          }}
        >
          {rings}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
