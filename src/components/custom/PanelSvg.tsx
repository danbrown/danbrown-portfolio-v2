export interface PanelSvgProps {
  primaryColor?: string;
  secondaryColor?: string;
  style?: React.CSSProperties;
}

export const PanelSvg = ({
  type = "Q1",
  ...props
}: PanelSvgProps & { type: "Q1" | "Q2" | "Q3" | "Q4" }) => {
  return {
    Q1: <PanelQ1Svg {...props} />,
    Q2: <PanelQ2Svg {...props} />,
    Q3: <PanelQ3Svg {...props} />,
    Q4: <PanelQ4Svg {...props} />,
  }[type];
};

const PanelQ1Svg = ({
  primaryColor = "#fff",
  secondaryColor = "#000",
  style = {},
}: PanelSvgProps) => {
  return (
    <svg
      width="652"
      height="370"
      viewBox="0 0 652 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M639.619 82.0282L619.488 327.467L47.3148 368.271L0.483154 30.2881L639.619 82.0282Z"
        fill={secondaryColor}
      />
      <path
        d="M628 99.7456L598.1 336.884L58.8509 350L30 20L628 99.7456Z"
        fill={primaryColor}
      />
    </svg>
  );
};

const PanelQ2Svg = ({
  primaryColor = "#fff",
  secondaryColor = "#000",
  style = {},
}: PanelSvgProps) => {
  return (
    <svg
      width="652"
      height="452"
      viewBox="0 0 652 452"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M113.791 386.911L23.3746 134.491L642.587 77.0907L618.181 423.816L113.791 386.911Z"
        fill={secondaryColor}
      />
      <path
        d="M117.006 375.448L51.5494 116.445L632.144 92.0621L583.742 439.813L117.006 375.448Z"
        fill={primaryColor}
      />
    </svg>
  );
};

const PanelQ3Svg = ({
  primaryColor = "#fff",
  secondaryColor = "#000",
  style = {},
}: PanelSvgProps) => {
  return (
    <svg
      width="789"
      height="620"
      viewBox="0 0 789 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M651.564 170.031L716.651 434.401L63.9717 425.671L101.067 95.8684L651.564 170.031Z"
        fill={secondaryColor}
      />
      <path
        d="M630.64 154.524L700.724 412.472L88.7079 450.03L112.144 119.86L630.64 154.524Z"
        fill={primaryColor}
      />
    </svg>
  );
};

const PanelQ4Svg = ({
  primaryColor = "#fff",
  secondaryColor = "#000",
  style = {},
}: PanelSvgProps) => {
  return (
    <svg
      width="631"
      height="373"
      viewBox="0 0 631 373"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M555.107 14.9952L19.3869 88.9016L7.1127 351.1L623.689 346.272L555.107 14.9952Z"
        fill={secondaryColor}
      />
      <path
        d="M571.79 37.0051L49.6548 63.1812L14.2153 323.222L607.925 373L571.79 37.0051Z"
        fill={primaryColor}
      />
    </svg>
  );
};
