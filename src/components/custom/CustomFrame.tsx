import { useWidth } from "@wipsie/ui";
import { motion } from "framer-motion";

export const CustomFrame = () => {
  const width = useWidth();

  return (
    <>
      <motion.img
        src="./static/shape-up.svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
        initial={{ top: "-100%" }}
        animate={{ top: width < 1000 ? 0 : "-10%" }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
      <motion.img
        src="./static/shape-down.svg"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
        initial={{ bottom: "-100%" }}
        animate={{ bottom: width < 1000 ? 0 : "-10%" }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
    </>
  );
};
