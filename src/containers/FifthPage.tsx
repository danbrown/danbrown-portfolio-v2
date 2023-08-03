import { CustomFrame } from "@components/custom/CustomFrame";
import { AspectRatio, Flex, Page, Typography, responsive } from "@wipsie/ui";

export const FifthPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  return (
    <Page
      backgroundColor="black"
      display="flex"
      direction="row"
      align="center"
      justify="between"
      style={{ position: "relative", overflow: "hidden" }}
      p={5}
    >
      <CustomFrame
        visible={totalProgress > pageIndex && totalProgress < pageIndex + 0.5}
      />

      <Typography
        variant="h1"
        color="red"
        align="center"
        style={{
          fontSize: responsive(40, 80),
        }}
      >
        look-a-look at
        <br />
        what I found
      </Typography>

      <Flex width={responsive(250, 600)}>
        <AspectRatio aspectRatio="16:9">
          <img
            src="https://api-media.zetahex.com/download/6024acc5-569a-421d-a665-e8665ce01529?size=1000"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              objectPosition: "center",
            }}
          />
        </AspectRatio>
      </Flex>
    </Page>
  );
};
