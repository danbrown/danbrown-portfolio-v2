import { RingAnimation } from "@components/custom/RingAnimation";
import { Page } from "@wipsie/ui";

export const SixthPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  return (
    <Page backgroundColor="cyan">
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
