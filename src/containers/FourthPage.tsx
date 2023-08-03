import { HoverClipPanel } from "@components/custom/HoverClipPanel";
import { PanelSvg } from "@components/custom/PanelSvg";
import { RingAnimation } from "@components/custom/RingAnimation";
import { Flex, Page, responsive, useWidth } from "@wipsie/ui";

export const FourthPage = ({
  pageIndex,
  pages,
  progress,
  totalProgress,
  currentPage,
}) => {
  const width = useWidth() as number;

  return (
    <Page
      backgroundColor="black"
      display="flex"
      align="center"
      justify="center"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background */}
      <Flex
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <PanelSvg
          type="Q4"
          primaryColor="red"
          secondaryColor="white"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            transform: `scale(${width < 600 ? 1 : 1.7})`,
            transition: "transform 0.5s ease",
          }}
        />
        <PanelSvg
          type="Q1"
          primaryColor="red"
          secondaryColor="white"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            transform: `scale(${width < 600 ? 1 : 1.7})`,
            transition: "transform 0.5s ease",
          }}
        />
      </Flex>

      {/* Boxes */}
      <Flex align="center" justify="center" style={{ position: "relative" }}>
        <Flex p={responsive(20, 40)}>
          <HoverClipPanel
            type="Q1"
            width={responsive(250, 580)}
            height={responsive(150, 380)}
          >
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
          </HoverClipPanel>
        </Flex>
        <Flex p={responsive(20, 40)}>
          <HoverClipPanel
            type="Q2"
            width={responsive(250, 580)}
            height={responsive(150, 380)}
          >
            <img
              src="https://api-media.zetahex.com/download/c0514df8-e470-4448-ad44-401ff9c77e8b?size=1000"
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
          </HoverClipPanel>
        </Flex>
      </Flex>

      <Flex align="center" justify="center" style={{ position: "relative" }}>
        <Flex p={responsive(20, 40)}>
          <HoverClipPanel
            type="Q3"
            width={responsive(250, 580)}
            height={responsive(150, 380)}
          >
            <img
              src="https://api-media.zetahex.com/download/45cdc752-1b9a-4143-b3e9-3b7999479112?size=1000"
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
          </HoverClipPanel>
        </Flex>

        <Flex p={responsive(20, 40)}>
          <HoverClipPanel
            type="Q4"
            width={responsive(250, 580)}
            height={responsive(150, 380)}
          >
            <img
              src="https://api-media.zetahex.com/download/321fe1af-b277-4786-82ce-d9d670aab6c1?size=1000s"
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
          </HoverClipPanel>
        </Flex>
      </Flex>
    </Page>
  );
};
