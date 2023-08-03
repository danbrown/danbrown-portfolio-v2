import { AspectRatio, Container, Flex } from "@wipsie/ui";

export const TvContainer = ({
  primaryColor = "#000",
  secondaryColor = "#fff",
  style = {},
  children = null,
  aspectRatio = "16:9",
  ...props
}) => {
  return (
    <Flex style={{ position: "relative", ...style }} {...props}>
      <AspectRatio aspectRatio={aspectRatio}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            width: "80%",
            height: "85%",
          }}
        >
          {children}
        </Flex>

        <svg
          width="1046"
          height="636"
          viewBox="0 0 1046 636"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M89.9991 55.7609C229.332 40.0942 596.499 18.1609 950.499 55.7609C964.5 212.261 964.5 378.761 950.499 541.761C786.832 556.427 385.599 576.961 89.9991 541.761C72.0002 373.761 80.0011 177.761 89.9991 55.7609ZM98.4902 63.001C235.025 47.7272 594.819 26.344 941.71 63.001C955.43 215.576 955.43 377.9 941.71 536.812C781.33 551.111 388.154 571.13 98.4902 536.812C80.8527 373.026 88.693 181.941 98.4902 63.001Z"
            fill={secondaryColor}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.5 7L1046 0L1014 592.5H940V636H895L889.951 592.5H143.099L140 635.5H96L91.7387 592.5H19.5L0.5 7ZM89.9991 55.7609C229.332 40.0942 596.499 18.1609 950.499 55.7609C964.5 212.261 964.5 378.761 950.499 541.761C786.833 556.427 385.599 576.961 89.9991 541.761C72.0002 373.761 80.0011 177.761 89.9991 55.7609Z"
            fill={primaryColor}
          />
        </svg>
      </AspectRatio>
    </Flex>
  );
};
