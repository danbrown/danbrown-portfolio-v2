import { ReactNode, useState } from "react";
import { ClipContainer, ClipContainerType } from "./CustomClipMaterials";
import { ContainerProps, Flex } from "@wipsie/ui";

export const HoverClipPanel = ({
  children = null,
  type = "Q1",
  width = "600px",
  height = "400px",
  primaryColor = "black",
  secondaryColor = "white",
  animationDuration = 0.2,

  initialScale = 1.02,
  initalAngle = -3,
  initialTranslateX = "-0.3%",

  finalScale = 1.01,
  finalAngle = 4,
  finalTranslateX = "0.5%",

  ...props
}: {
  children?: ReactNode;
  type?: ClipContainerType;
  width?: string | number;
  height?: string | number;
  primaryColor?: string;
  secondaryColor?: string;

  animationDuration?: number;

  initialScale?: number;
  initalAngle?: number;
  initialTranslateX?: string;

  finalScale?: number;
  finalAngle?: number;
  finalTranslateX?: string;
} & ContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      width={width}
      height={height}
      style={{
        position: "relative",
      }}
    >
      <ClipContainer
        clipPath={type}
        shape="square"
        backgroundColor={secondaryColor}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          // transform: "scale(1.01) rotate(4deg) translate(0.5%, 0px)",
          transform: `scale(${isHovered ? finalScale : initialScale}) rotate(${
            isHovered ? finalAngle : initalAngle
          }deg) translateX(${isHovered ? finalTranslateX : initialTranslateX})`,
          transition: `transform ${animationDuration}s ease-in-out`,
        }}
      />
      <ClipContainer
        clipPath={type}
        shape="square"
        backgroundColor={primaryColor}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          ...props?.style,
        }}
        {...props}
      >
        {children}
      </ClipContainer>
    </Flex>
  );
};
