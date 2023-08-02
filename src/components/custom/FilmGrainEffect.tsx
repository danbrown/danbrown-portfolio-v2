// inspired by: https://codepen.io/josetxu/pen/yLjwOwQ

import { AnimatePresence, motion } from "framer-motion";

export const FilmGrainEffect = ({
  sepiaFilter,
  invertGrain,
  vignette = true,
  vignetteOpacity = 1,
  vignetteColor = "black",
  style = {},
  children = null,
  animationDuration = 0.5,
}) => {
  return (
    <>
      {/* Content */}
      <motion.div
        style={{
          position: "relative",
          filter: sepiaFilter ? `sepia(0.75)` : "none",
          overflow: "hidden",
          ...style,
        }}
        transition={{ duration: animationDuration, repeat: Infinity }}
      >
        {/* Vignette */}
        <AnimatePresence>
          {vignette && (
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1,
                height: "100%",
                boxShadow: `0 0 20vmin 0vmin ${vignetteColor} inset, 0 0 3vmin 0.5vmin ${vignetteColor} inset, 0 0 1vmin 1vmin ${vignetteColor} inset`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: vignetteOpacity }}
              exit={{ opacity: 0 }} // Add exit animation
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
          )}
        </AnimatePresence>

        {/* Children */}
        {children}

        {/* Film */}
        <motion.div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            filter: invertGrain
              ? `invert(1) blur(0.45px) drop-shadow(0px 0px 0px #fff1)`
              : `blur(0.45px) drop-shadow(0px 0px 0px #fff1)`,
          }}
          transition={{ duration: animationDuration, repeat: Infinity }}
        >
          {/* Film After */}
          <motion.div
            style={{
              position: "absolute",
              width: "120%",
              height: "100%",
              top: "0%",
              left: "0%",
              paddingLeft: 100,
              opacity: 0.5,
              background: `repeating-linear-gradient(90deg, ${vignetteColor} 0 2px, transparent 4px 37vmin)`,
            }}
            animate={{
              transform: [
                "translateX(0)",
                "translateX(-1%)",
                "translateX(1%)",
                "translateX(-2%)",
                "translateX(3%)",
                "translateX(-3%)",
                "translateX(8%)",
                "translateX(-3%)",
                "translateX(10%)",
                "translateX(-2%)",
                "translateX(0)",
              ],
              opacity: [
                0.5, // 0%
                0.5, // 10%
                0.5, // 20%
                0.75, // 30%
                0.75, // 40%
                0.5, // 50%
                0.5, // 60%
                0.5, // 70%
                0.25, // 80%
                0.25, // 90%
                0.5, // 100%
              ],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              type: "keyframes",
            }}
          />

          {/* Effect */}
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              filter: `blur(0.45px) drop-shadow(0px 0px 0px #fff1)`,
            }}
            transition={{ duration: animationDuration, repeat: Infinity }}
          >
            {/* Effect After */}
            <motion.div
              style={{
                position: "absolute",
                width: "120%",
                height: "100%",
                top: "0%",
                left: "30%",
                paddingLeft: 100,
                opacity: 0.5,
                background: `repeating-linear-gradient(90deg, ${vignetteColor} 0 2px, transparent 4px 37vmin)`,
              }}
              animate={{
                transform: [
                  "translateX(0)",
                  "translateX(-1%)",
                  "translateX(1%)",
                  "translateX(-2%)",
                  "translateX(3%)",
                  "translateX(-3%)",
                  "translateX(8%)",
                  "translateX(-3%)",
                  "translateX(10%)",
                  "translateX(20%)",
                  "translateX(30%)",
                ],
                opacity: [
                  0.75, // 0%
                  0.75, // 10%
                  0.75, // 20%
                  0.75, // 30%
                  0.75, // 40%
                  0.5, // 50%
                  0.5, // 60%
                  0.5, // 70%
                  0.25, // 80%
                  0.25, // 90%
                  0.25, // 100%
                ],
              }}
              transition={{
                duration: animationDuration,
                repeat: Infinity,
                type: "keyframes",
              }}
            />

            {/* Grain */}
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
              transition={{ duration: animationDuration, repeat: Infinity }}
            >
              {/* Grain After */}
              <motion.div
                style={{
                  position: "absolute",
                  width: "115%",
                  height: "115%",
                  top: "-5%",
                  left: "-5%",
                  backgroundImage: `repeating-conic-gradient(${vignetteColor} 0%, transparent 0.00003%, transparent 0.0005%, transparent 0.00095%), repeating-conic-gradient(${vignetteColor} 0%,transparent 0.00005%, transparent 0.00015%, transparent 0.0009%)`,
                  filter: "drop-shadow(0px 0px 1px black)",

                  // set just the steps
                  animation: "steps(1)",
                }}
                animate={{
                  transform: [
                    "translate(0, 0)",
                    "translate(-1%, -1%)",
                    "translate(1%, 1%)",
                    "translate(-2%, -2%)",
                    "translate(3%, 3%)",
                    "translate(-3%, -3%)",
                    "translate(4%, 4%)",
                    "translate(-4%, -4%)",
                    "translate(2%, 2%)",
                    "translate(-3%, -3%)",
                    "translate(0, 0)",
                  ],
                }}
                transition={{
                  duration: animationDuration,
                  repeat: Infinity,
                  type: "keyframes",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
