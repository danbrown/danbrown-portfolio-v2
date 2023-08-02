import { Flex, FlexProps } from "@wipsie/ui";

const ChatBallonSvg = ({ primaryColor, secondaryColor, style }) => {
  return (
    <svg
      width="747"
      height="230"
      viewBox="0 0 747 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M103.595 204.033L20.5947 149.533L94.5947 158.533L97.5947 128.533L173.595 153.533L154.095 78.5332L668.095 5.5332L739.595 215.533H183.595L154.095 223.533L121.595 177.033L103.595 204.033Z"
        fill={primaryColor}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 141.991L90.128 152.953L93.2396 121.837L166.449 145.919L147.846 74.37L671.493 0L746.579 220.533H184.261L152.011 229.279L121.692 185.9L105.001 210.938L0 141.991ZM121.595 177.033L154.095 223.533L183.595 215.533H739.595L668.095 5.53278L154.095 78.5328L173.595 153.533L97.5949 128.533L94.5949 158.533L20.5949 149.533L103.595 204.033L121.595 177.033Z"
        fill={secondaryColor}
      />
      <path
        d="M97.5947 194.533L53.5947 160.033L100.095 168.533L103.595 140.033L185.095 166.033L171.595 87.5332L659.095 15.5332L721.095 207.033H183.095L156.595 211.033L122.595 166.033L97.5947 194.533Z"
        fill={secondaryColor}
      />
    </svg>
  );
};

const LabelBallonSvg = ({ primaryColor, secondaryColor, style }) => {
  return (
    <svg
      width="322"
      height="173"
      viewBox="0 0 322 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M72.3056 59.9718L81.2168 95.5504C53.4629 97.6042 29.094 98.4167 0.971164 99.8672L147.416 136.708L137.906 116.415L311.422 113.492L282.98 62.9197L72.3056 59.9718Z"
        fill={primaryColor}
      />
      <path
        d="M133.988 126.271L26.0956 102.322L89.7497 100.693L80.3699 67.0583L277.569 68.3011L293.906 107.213L130.094 110.417L133.988 126.271Z"
        fill={secondaryColor}
      />
    </svg>
  );
};

export const TextBallon = ({
  type = "chat",
  ref,
  primaryColor = "#fff",
  secondaryColor = "#000",
  wrapperStyle = {},
  wrapperProps = {},
  svgStyle = {},
  children,

  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  fullWidth,
  fullHeight,
  ...props
}: {
  type?: "chat" | "label";
  primaryColor?: string;
  secondaryColor?: string;
  wrapperStyle?: React.CSSProperties;
  wrapperProps?: FlexProps;
  svgStyle?: React.CSSProperties;
} & FlexProps) => {
  const svgStyleComplied = {
    ...svgStyle,
  };

  return (
    <Flex
      ref={ref && (ref as any)}
      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
      minHeight={minHeight}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      align="center"
      justify="center"
      style={{
        position: "relative",
        ...wrapperStyle,
        // backgroundColor: "red",
      }}
      {...wrapperProps}
    >
      {
        {
          chat: (
            <ChatBallonSvg
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              style={{ ...svgStyleComplied, ...props?.style }}
            />
          ),
          label: (
            <LabelBallonSvg
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              style={{ ...svgStyleComplied, ...props?.style }}
            />
          ),
        }[type]
      }

      <Flex
        direction="column"
        align="center"
        justify="center"
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
      </Flex>
    </Flex>
  );
};
