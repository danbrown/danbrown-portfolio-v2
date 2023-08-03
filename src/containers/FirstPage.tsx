import { CustomFrame } from "@components/custom/CustomFrame";
import { PatternCircle } from "@components/custom/PatternCircle";
import { TvContainer } from "@components/custom/TvContainer";
import { Vignette } from "@components/custom/Vignette";
import { Page, responsive } from "@wipsie/ui";
import { motion } from "framer-motion";

export const FirstPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  return (
    <Page
      backgroundColor="red"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          userSelect: "none",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate={{
          transform: ["rotate(360deg)", "rotate(0deg)"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <PatternCircle
          primaryColor="white"
          style={{
            width: responsive(500, 1200),
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          userSelect: "none",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate={{
          transform: ["rotate(0deg)", "rotate(360deg)"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <PatternCircle
          primaryColor="black"
          style={{
            width: responsive(500, 1200),
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0.95)",
          }}
        />
      </motion.div>

      <CustomFrame visible={totalProgress < pageIndex + 0.3} />
    </Page>
  );
};
