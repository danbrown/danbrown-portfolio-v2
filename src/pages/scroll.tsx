import { CSS_VARS, STYLE } from "@stickyroll/react/constants";
import useStickyroll from "@stickyroll/react/use-stickyroll";
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
  ContainerProps,
  Page,
} from "@wipsie/ui";
import { AnimatePresence, motion } from "framer-motion";
import { DefaultLayout } from "../components/DefaultLayout";
import { useRouter } from "next/router";
import { CustomFrame } from "../components/custom/CustomFrame";
import { CustomLabel } from "../components/custom/CustomLabel";
import { ReactNode, useEffect, useRef, useState } from "react";
import { RingAnimation } from "@components/custom/RingAnimation";
import { ArrowDownSvg } from "@components/custom/ArrowDownSvg";
import { Vignette } from "@components/custom/Vignette";
import { ExclamationDouble } from "@components/custom/ExclamationDouble";
import { ExclamationSimple } from "@components/custom/ExclamationSimple";
import { PatternCircle } from "@components/custom/PatternCircle";
import {
  ClipContainer,
  ClipContainerType,
  CustomClipMaterials,
} from "@components/custom/CustomClipMaterials";
import { PanelSvg } from "@components/custom/PanelSvg";
import { PaintSplash } from "@components/custom/PaintSplash";
import { FilmGrainEffect } from "@components/custom/FilmGrainEffect";
import { HoverClipPanel } from "@components/custom/HoverClipPanel";
import { TextBallon } from "@components/custom/TextBallon";
import Stickyroll from "@stickyroll/react/stickyroll";
import { TvContainer } from "@components/custom/TvContainer";

export default function Home(props) {
  const theme = useTheme();
  const width = useWidth();
  const router = useRouter();

  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = 3;
  const [progress, setProgress] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);

  const stickyrollRef = useRef(null);
  useStickyroll(stickyrollRef, {
    pages,
    factor: 1,

    onProgress: (progress, page, index) => {
      setProgress(progress);
      setTotalProgress(index + progress);
    },
    onPage: (page, index) => {
      setPage(page);
      setCurrentPage(index);
    },
  });

  return (
    <div
      ref={stickyrollRef}
      style={{
        height: `var(${CSS_VARS.height}, var(--100vh, 100vh))`,
      }}
    >
      {/* <div style={STYLE}>Scroll here.</div> */}

      <FirstPage
        pageIndex={0}
        currentPage={currentPage}
        pages={pages}
        progress={progress}
        totalProgress={totalProgress}
      />
      <SecondPage
        pageIndex={1}
        currentPage={currentPage}
        pages={pages}
        progress={progress}
        totalProgress={totalProgress}
      />
      <ThirdPage
        pageIndex={2}
        currentPage={currentPage}
        pages={pages}
        progress={progress}
        totalProgress={totalProgress}
      />
      <FourthPage
        pageIndex={3}
        currentPage={currentPage}
        pages={pages}
        progress={progress}
        totalProgress={totalProgress}
      />
      {/*
      <AnimatePresence>
         {
          {
            0: (
              <FirstPage
                pageIndex={pageIndex}
                pages={pages}
                progress={progress}
              />
            ),
            1: (
              <SecondPage
                pageIndex={pageIndex}
                pages={pages}
                progress={progress}
              />
            ),
            2: (
              <ThirdPage
                pageIndex={pageIndex}
                pages={pages}
                progress={progress}
              />
            ),
            3: (
              <FourthPage
                pageIndex={pageIndex}
                pages={pages}
                progress={progress}
              />
            ),
          }[pageIndex]
        } 
      </AnimatePresence>
        */}
    </div>
  );
}

const FirstPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  return (
    <Page backgroundColor="primary">
      <p>
        {pageIndex} / {pages}
      </p>
      <p>{progress}</p>
      <p>{totalProgress}</p>
      <input
        type="range"
        min="0"
        max={pages}
        step="0.01"
        value={totalProgress}
      />
      <Vignette visible={totalProgress > pageIndex + 0.1} />
      {pageIndex + 0.1}
      <TvContainer width={responsive(300, 1200)}>
        <img
          src={
            totalProgress >= pageIndex && totalProgress < pageIndex + 0.05
              ? "https://api-media.zetahex.com/download/6024acc5-569a-421d-a665-e8665ce01529?size=1000"
              : totalProgress >= pageIndex + 0.05 &&
                totalProgress < pageIndex + 0.1
              ? "https://api-media.zetahex.com/download/c0514df8-e470-4448-ad44-401ff9c77e8b?size=1000"
              : totalProgress >= pageIndex + 0.15 &&
                totalProgress < pageIndex + 0.2
              ? "https://api-media.zetahex.com/download/45cdc752-1b9a-4143-b3e9-3b7999479112?size=1000"
              : totalProgress >= pageIndex + 0.25 &&
                totalProgress < pageIndex + 0.3
              ? "https://api-media.zetahex.com/download/321fe1af-b277-4786-82ce-d9d670aab6c1?size=1000s"
              : "https://api-media.zetahex.com/download/83801b95-8583-4245-953e-e781953fd0b2?size=1000"
          }
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </TvContainer>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eligendi ea
      cumque nihil magnam, rerum maiores, excepturi esse dolore tempore
      consequuntur. Deleniti reprehenderit culpa quas vel id pariatur voluptate
      illo vero ab ipsam assumenda laboriosam qui eaque, nemo, voluptatem
      aperiam dolores beatae dolore doloribus perferendis itaque modi! Veritatis
      nostrum deserunt soluta. Quasi praesentium exercitationem cupiditate culpa
      officiis impedit perspiciatis commodi earum amet autem nesciunt ex,
      veritatis obcaecati dolor magni? Blanditiis dolor beatae error. Sit
      perferendis blanditiis obcaecati fuga nulla iste, deleniti, saepe
      laboriosam, pariatur sapiente id ipsa quisquam officia architecto
      quibusdam mollitia dolor debitis? Doloribus laudantium facere praesentium!
      Quasi, omnis!
    </Page>
  );
};

const SecondPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  return (
    <Page backgroundColor="secondary">
      <p>
        {pageIndex} / {pages}
      </p>
      <p>{progress}</p>
      <p>{totalProgress}</p>
      <input
        type="range"
        min="0"
        max={pages}
        step="0.01"
        value={totalProgress}
      />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eligendi ea
      cumque nihil magnam, rerum maiores, excepturi esse dolore tempore
      consequuntur. Deleniti reprehenderit culpa quas vel id pariatur voluptate
      illo vero ab ipsam assumenda laboriosam qui eaque, nemo, voluptatem
      aperiam dolores beatae dolore doloribus perferendis itaque modi! Veritatis
      nostrum deserunt soluta. Quasi praesentium exercitationem cupiditate culpa
      officiis impedit perspiciatis commodi earum amet autem nesciunt ex,
      veritatis obcaecati dolor magni? Blanditiis dolor beatae error. Sit
      perferendis blanditiis obcaecati fuga nulla iste, deleniti, saepe
      laboriosam, pariatur sapiente id ipsa quisquam officia architecto
      quibusdam mollitia dolor debitis? Doloribus laudantium facere praesentium!
      Quasi, omnis!
      <PaintSplash visible={totalProgress > pageIndex - 0.5} width={600} />
    </Page>
  );
};

const ThirdPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    if (videoRef?.current && videoRef?.current?.duration) {
      let newV = Math.max(0, Math.min(1, progress) * videoRef.current.duration);
      videoRef.current.currentTime = newV;
    }
  }, [progress, videoRef?.current?.duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Page backgroundColor="red">
        <p>
          {pageIndex} / {pages}
        </p>
        <p>{progress}</p>
        <p>{totalProgress}</p>
        <input
          type="range"
          min="0"
          max={pages}
          step="0.01"
          value={totalProgress}
        />
        <video
          ref={videoRef}
          src="/static/assets/phone.mp4"
          loop={false}
          muted
          controls={false}
          autoPlay={false}
          style={{ width: "100%" }}
        ></video>
        <CustomFrame
          visible={
            totalProgress > pageIndex - 0.3 && totalProgress < pageIndex + 0.2
          }
        />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eligendi
        ea cumque nihil magnam, rerum maiores, excepturi esse dolore tempore
        consequuntur. Deleniti reprehenderit culpa quas vel id pariatur
        voluptate illo vero ab ipsam assumenda laboriosam qui eaque, nemo,
        voluptatem aperiam dolores beatae dolore doloribus perferendis itaque
        modi! Veritatis nostrum deserunt soluta. Quasi praesentium
        exercitationem cupiditate culpa officiis impedit perspiciatis commodi
        earum amet autem nesciunt ex, veritatis obcaecati dolor magni?
        Blanditiis dolor beatae error. Sit perferendis blanditiis obcaecati fuga
        nulla iste, deleniti, saepe laboriosam, pariatur sapiente id ipsa
        quisquam officia architecto quibusdam mollitia dolor debitis? Doloribus
        laudantium facere praesentium! Quasi, omnis!
      </Page>
    </motion.div>
  );
};

const FourthPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Page backgroundColor="blue">
        <p>
          {pageIndex} / {pages}
        </p>
        <p>{progress}</p>
        <p>{totalProgress}</p>
        <input
          type="range"
          min="0"
          max={pages}
          step="0.01"
          value={totalProgress}
        />
        <RingAnimation visible={totalProgress > pageIndex - 0.3} />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eligendi
        ea cumque nihil magnam, rerum maiores, excepturi esse dolore tempore
        consequuntur. Deleniti reprehenderit culpa quas vel id pariatur
        voluptate illo vero ab ipsam assumenda laboriosam qui eaque, nemo,
        voluptatem aperiam dolores beatae dolore doloribus perferendis itaque
        modi! Veritatis nostrum deserunt soluta. Quasi praesentium
        exercitationem cupiditate culpa officiis impedit perspiciatis commodi
        earum amet autem nesciunt ex, veritatis obcaecati dolor magni?
        Blanditiis dolor beatae error. Sit perferendis blanditiis obcaecati fuga
        nulla iste, deleniti, saepe laboriosam, pariatur sapiente id ipsa
        quisquam officia architecto quibusdam mollitia dolor debitis? Doloribus
        laudantium facere praesentium! Quasi, omnis!
      </Page>
    </motion.div>
  );
};
