import { CustomFrame } from "@components/custom/CustomFrame";
import { Page } from "@wipsie/ui";
import { useEffect, useRef } from "react";

export const ThirdPage = ({
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
    <Page backgroundColor="orange">
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
