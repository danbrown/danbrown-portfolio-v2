import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Modify } from "@customTypes/modify";

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  index = 0,
  length = 4,
  prefix,
  suffix,
  vertical = false,
  width = "10px",
  activeWidth = "50px",
  radius = "10px",
  activeColor = "orange",
  defaultColor = "white",
  prefixProps,
  suffixProps,
  wrapperStyle = {},
  dotAction = () => {},
}) => {
  return (
    <div
      style={{
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // flex-direction: ${(props: any) => (props.vertical ? "column" : "row")};

        // transform: ${(props: any) => (props.vertical ? "translateX(25%)" : "none")};
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: vertical ? "column" : "row",
        transform: vertical ? "translateX(25%)" : "none",

        ...wrapperStyle,
      }}
    >
      {/* After */}
      <AnimatePresence>
        {vertical && (
          <motion.div
            style={{
              // ${(props: any) => (props.vertical ? "content: ''" : "")};
              // width: 1px;
              // height: 100%;
              // top: 0;
              // margin-right: 30px;
              // position: absolute;
              // background-color: ${(props: any) => props.color};
              // animation: scrollAnimation 4s ease-in-out infinite;
              width: "1px",
              height: "100%",
              position: "absolute",
              top: 0,
              marginRight: "30px",
              backgroundColor: defaultColor,
            }}
            animate={{
              height: [
                "0%",
                "100%",
                "100%",
                "0%",
                "0%",
                "0%",
                "0%",
                "0%",
                "0%",
                "0%",
                "0%",
              ],
              top: [
                "0%",
                "0%",
                "0%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>

      {/* Prefix */}
      {prefix && (
        <div
          style={{
            letterSpacing: "5px",
            fontSize: "12px",
            margin: "5px",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            transform: vertical ? "rotate(90deg) translateX(-50%)" : "none",
          }}
          {...prefixProps}
        >
          {prefix}
        </div>
      )}

      {/* Dots */}
      {Array.from({ length }).map((item, i) => {
        return (
          <div
            key={i}
            style={{
              width: vertical ? width : i === index ? activeWidth : width,
              height: vertical ? (i === index ? activeWidth : width) : width,
              borderRadius: radius,
              backgroundColor: i === index ? activeColor : defaultColor,
              margin: "5px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={(e) => {
              dotAction(e, i);
            }}
          />
        );
      })}

      {/* Suffix */}
      {suffix && (
        <div
          style={{
            letterSpacing: "5px",
            fontSize: "12px",
            margin: "5px",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            transform: vertical ? "rotate(90deg) translateX(-50%)" : "none",
          }}
          {...suffixProps}
        >
          {suffix}
        </div>
      )}
    </div>
  );
};

export default ScrollIndicator;

// ELEMENTS
// const Wrapper = styled.div`
//   /* display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: ${(props: any) => (props.vertical ? "column" : "row")};

//   transform: ${(props: any) =>
//     props.vertical ? "translateX(25%)" : "none"}; */

//   &:after {
//     /* ${(props: any) => (props.vertical ? "content: ''" : "")};
//     width: 1px;
//     height: 100%;
//     top: 0;
//     margin-right: 30px;
//     position: absolute;
//     background-color: ${(props: any) => props.color};
//     animation: scrollAnimation 4s ease-in-out infinite; */
//   }

//   @keyframes scrollAnimation {
//     0% {
//       height: 0%;
//       top: 0%;
//     }

//     10% {
//       top: 0%;
//       height: 100%;
//     }

//     30% {
//       top: 100%;
//       height: 0%;
//     }

//     100% {
//       top: 100%;
//       height: 0%;
//     }
//   }
// ` as React.FC<ScrollIndicatorWrapperProps>;

// const Dot = styled.div`
//   /* width: ${(props: any) =>
//     props.vertical
//       ? props?.width
//       : props?.active
//       ? props?.activeWidth
//       : props?.width};
//   height: ${(props: any) =>
//     props.vertical
//       ? props?.active
//         ? props?.activeWidth
//         : props?.width
//       : props?.width};
//   border-radius: ${(props: any) => props?.radius};
//   background-color: ${(props: any) =>
//     props?.active ? props?.activeColor : props?.defaultColor};
//   margin: 5px;
//   cursor: pointer;
//   transition: all 0.3s ease; */
// ` as React.FC<DotProps>;

// const Text = styled.button`
//   /* letter-spacing: 5px;
//   font-size: 12px;
//   margin: 5px;
//   cursor: pointer;
//   background-color: transparent;
//   border: none;
//   color: white;

//   transform: ${(props: any) =>
//     props.vertical ? "rotate(90deg) translateX(-50%)" : "none"}; */
// `;

// TYPES
// type DotProps = Modify<
//   React.HTMLProps<HTMLDivElement>,
//   {
//     /**
//      * Tell if the dot is active
//      */
//     active: boolean;
//     /**
//      * Dots width
//      */
//     width?: string;
//     /**
//      * Use Vertical Layout
//      */
//     vertical?: boolean;
//     /**
//      * Dots active width
//      */
//     activeWidth?: string;
//     /**
//      * Dots radius
//      */
//     radius?: string;
//     /**
//      * Dots active color
//      */
//     activeColor?: string;
//     /**
//      * Dots active color
//      */
//     defaultColor?: string;
//     /**
//      * onClick action, has the index attribute
//      */
//     dotAction?: (e: any, index: number) => void;
//   }
// >;

type ScrollIndicatorProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  {
    /**
     * Text before the dots
     */
    prefix?: string;
    /**
     * Use Vertical Layout
     */
    vertical?: boolean;
    /**
     * Text after the dots
     */
    suffix?: string;
    /**
     * Total Dots Lenght
     */
    length: number;
    /**
     * the current active index
     */
    index: number;
    /**
     * Dots width
     */
    width?: string;
    /**
     * Dots active width
     */
    activeWidth?: string;
    /**
     * Dots radius
     */
    radius?: string;
    /**
     * Dots active color
     */
    activeColor?: string;
    /**
     * Dots active color
     */
    defaultColor?: string;
    /**
     * Props passed to prefix button
     */
    prefixProps?: any;
    /**
     * Props passed to suffix button
     */
    suffixProps?: any;
    /**
     * onClick action, has the index attribute
     */
    dotAction?: (e: any, index: number) => void;

    wrapperStyle?: React.CSSProperties;
  }
>;

// type ScrollIndicatorWrapperProps = Modify<
//   React.HTMLProps<HTMLDivElement>,
//   {
//     /**
//      * Use Vertical Layout
//      */
//     vertical?: boolean;
//   }
// >;
