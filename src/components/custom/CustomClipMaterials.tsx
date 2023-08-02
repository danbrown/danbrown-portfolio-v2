import { Container, ContainerProps } from "@wipsie/ui";

// Create clipPath definitions
export const CustomClipMaterials = ({}) => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath
            id="panelClipQ1"
            fill="#FFFFFF"
            stroke="#000000"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M1,0.242 L0.95,0.96 L0.048,1 L0,0 L1,0.242" />
          </clipPath>
          <clipPath
            id="panelClipQ2"
            fill="#FFFFFF"
            stroke="#000000"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0.114,0.815 L0.001,0.07 L1,0 L0.918,1 L0.114,0.815" />
          </clipPath>
          <clipPath
            id="panelClipQ3"
            fill="#FFFFFF"
            stroke="#000000"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0.887,0.108 L1,0.889 L0.001,1 L0.039,0.003 L0.887,0.108" />
          </clipPath>
          <clipPath
            id="panelClipQ4"
            fill="#FFFFFF"
            stroke="#000000"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0.939,0 L0.06,0.078 L0,0.852 L1,1 L0.939,0" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

// map all clipPath definitions to a switch object for easy access by components
const clipPathSwitch = {
  Q1: "url(#panelClipQ1)",
  Q2: "url(#panelClipQ2)",
  Q3: "url(#panelClipQ3)",
  Q4: "url(#panelClipQ4)",
};

export type ClipContainerType = keyof typeof clipPathSwitch;

// Create a component that uses the clipPath definitions by default, the clipPath can be overridden by passing a clipPath prop
export const ClipContainer = ({
  children,
  style = {},
  ref,
  clipPath = "Q1",
  ...props
}: ContainerProps & {
  clipPath?: keyof typeof clipPathSwitch;
}) => {
  return (
    <Container
      {...props}
      ref={ref && (ref as any)}
      style={{
        ...style,
        clipPath: clipPathSwitch[clipPath],
        WebkitClipPath: clipPathSwitch[clipPath],
      }}
    >
      {children}
    </Container>
  );
};
