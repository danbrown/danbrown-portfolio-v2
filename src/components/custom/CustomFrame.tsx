import { responsive, useWidth } from "@wipsie/ui";
import { motion, AnimatePresence } from "framer-motion";

export const CustomFrame = ({
  visible = true,
  height = responsive(100, 150),
  topInitial = -250,
  topExit = -150,
  bottomInitial = -250,
  bottomExit = -150,
}) => {
  const width = useWidth() as number;

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="shape-up"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
            height: height,
            background: `url(./static/shapes/shape-up.svg) no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom", // Adjust vertical position as needed
          }}
          initial={{ top: topInitial }}
          animate={{ top: width < 1000 ? -5 : -5 }}
          exit={{ top: topExit }} // Add exit animation
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      )}

      {visible && (
        <motion.div
          key="shape-down"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            height: height,
            zIndex: 1,
            background: `url(./static/shapes/shape-down.svg) no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center top", // Adjust vertical position as needed
          }}
          initial={{ bottom: bottomInitial }}
          animate={{ bottom: width < 1000 ? -5 : -5 }}
          exit={{ bottom: bottomExit }} // Add exit animation
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      )}
    </AnimatePresence>
  );
};
