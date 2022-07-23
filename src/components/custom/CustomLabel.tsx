import { responsive, useTheme } from "@wipsie/ui";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const CustomLabel = ({ href, label }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <motion.div
      onClick={() => {
        router.push(href);
      }}
      style={{
        width: responsive(200, 350),
        height: responsive(200, 350),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "AreYouOkay",
        fontSize: responsive(20, 30),
        cursor: "pointer",
        // background: theme.palette.primary[500],
      }}
      initial={{ scale: 0.8, rotate: -25 }}
      animate={{ scale: 1, rotate: 25 }}
      transition={{
        duration: 3,
        delay: 0,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <img
        src="./static/shape-label.svg"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <span
        style={{
          zIndex: 2,
          marginTop: responsive(30, 50),
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
};
