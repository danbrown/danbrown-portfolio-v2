export const ArrowDownSvg = ({
  primaryColor = "#fff",
  secondaryColor = "#000",
  style = {},
}) => {
  return (
    <svg
      width="186"
      height="410"
      viewBox="0 0 186 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M74.877 14.998L62.5 17.0002L55.6263 240.395L68 238.5L74.877 14.998ZM14.8926 250.719L107.359 394.455L101 410L0 253L14.8926 250.719Z"
        fill={secondaryColor}
      />
      <path
        d="M143 0L75 11L68 238.5L12.5 247L113.5 404L185.5 228L139.5 238.5L143 0Z"
        fill={primaryColor}
      />
    </svg>
  );
};
