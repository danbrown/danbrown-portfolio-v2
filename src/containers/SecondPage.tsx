import { ArrowDownSvg } from "@components/custom/ArrowDownSvg";
import { PaintSplash } from "@components/custom/PaintSplash";
import { Flex, Page, Typography, responsive } from "@wipsie/ui";

export const SecondPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  return (
    <Page backgroundColor="red" display="flex" align="center" justify="center">
      <Flex align="start" justify="center" style={{ position: "relative" }}>
        <Typography
          variant="h1"
          color="text"
          style={{
            fontSize: responsive(50, 150),
          }}
        >
          SO GET
          <br />
          DOWN
        </Typography>

        <ArrowDownSvg
          style={{
            width: responsive(50, 250),
            marginTop: 10,
          }}
        />

        <PaintSplash
          visible={totalProgress > pageIndex}
          width={400}
          wrapperStyle={{
            position: "absolute",
            left: -50,
            bottom: -100,
          }}
        />
      </Flex>
    </Page>
  );
};
