import {
  useTheme,
  Link,
  Button,
  Loading,
  useWidth,
  Grid,
  Flex,
  Spacing,
  responsive,
  Typography,
} from "@wipsie/ui";
import DefaultLayout from "../components/DefaultLayout";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CustomFrame } from "../components/custom/CustomFrame";
import { CustomLabel } from "../components/custom/CustomLabel";

export default function Home(props) {
  const theme = useTheme();
  const width = useWidth();
  const router = useRouter();

  return (
    <DefaultLayout meta={{}}>
      {/* <CustomFrame /> */}

      {/* <motion.img
        src="./static/shape-stripes.svg"
        style={{
          position: "absolute",
          top: "calc(50%)",
          left: 0,
          width: "100%",
        }}
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      /> */}

      <video
        src="./assets/phone.mp4"
        loop
        muted
        autoPlay
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      ></video>

      <Flex
        justify="center"
        align="center"
        direction={{
          xs: "column",
          sm: "row",
        }}
      >
        <CustomLabel href="/about" label="About" />
        <Spacing width={responsive(50, 200)} height={responsive(50, 100)} />
        <Typography variant="h1">awdaw</Typography>
        <Spacing width={responsive(50, 200)} height={responsive(50, 100)} />
        {/* <Spacing width={responsive(100, 300)} height={responsive(100, 300)} /> */}
        <CustomLabel href="/portfolio" label="Portfolio" />
      </Flex>
    </DefaultLayout>
  );
}
