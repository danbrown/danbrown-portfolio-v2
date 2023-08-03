import { CSS_VARS } from "@stickyroll/react/constants";
import useStickyroll from "@stickyroll/react/use-stickyroll";
import { useTheme, useWidth } from "@wipsie/ui";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { FirstPage } from "@containers/FirstPage";
import { SecondPage } from "@containers/SecondPage";
import { ThirdPage } from "@containers/ThirdPage";
import { FourthPage } from "@containers/FourthPage";
import { GeneralPageComponents } from "@containers/GeneralPageComponents";
import { FifthPage } from "@containers/FifthPage";
import { SixthPage } from "@containers/SixthPage";

export default function Home(props) {
  const theme = useTheme();
  const width = useWidth();
  const router = useRouter();

  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [progress, setProgress] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);

  const pageSections = [
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
  ];
  const pages = pageSections.length - 1;

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
      {pageSections.map((PageSection, index) => {
        return (
          <PageSection
            pageIndex={index}
            currentPage={currentPage}
            pages={pages}
            progress={progress}
            totalProgress={totalProgress}
          />
        );
      })}

      <GeneralPageComponents currentPage={currentPage} pages={pages} />
    </div>
  );
}
