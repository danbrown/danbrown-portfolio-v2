import { motion } from "framer-motion";
import { responsive } from "@wipsie/ui";

export const Vignette = ({ style = {}, visible = true }) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: `url(./static/assets/vignette.png) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom", // Adjust vertical position as needed
        ...style,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: "easeInOut",
      }}
    />
  );
};
