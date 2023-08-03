import ScrollIndicator from "@components/ScrollIndicator";
import { CustomClipMaterials } from "@components/custom/CustomClipMaterials";
import { Vignette } from "@components/custom/Vignette";
import { responsive } from "@wipsie/ui";
import { useState } from "react";

export const GeneralPageComponents = ({ currentPage, pages }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          userSelect: "none",
          pointerEvents: "none",
        }}
      ></div>

      <ScrollIndicator
        vertical
        index={currentPage}
        length={pages}
        prefix="SCROLL"
        width="5px"
        activeWidth="30px"
        activeColor="red"
        defaultColor="white"
        wrapperStyle={{
          position: "fixed",
          bottom: responsive(30, 200),
          right: responsive(30, 50),
          zIndex: 100,
        }}
        // prefixProps={{ onClick: () => setIndex(index - 1) }}
        // suffixProps={{ onClick: () => setIndex(index + 1) }}
        // dotAction={(e, i) => setIndex(i)}
      />

      <Vignette visible />

      <CustomClipMaterials />
    </>
  );
};
