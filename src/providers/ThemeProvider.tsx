import { useEffect } from "react";
import dynamic from "next/dynamic";
const TopProgressBar = dynamic(() => import("../components/TopProgressBar"));
import {
  ThemeProvider as WipsieThemeProvider,
  CssBaseline,
  NprogressBaseline,
} from "@wipsie/ui";
import { useSelector, useDispatch } from "react-redux";
import { settingsInit } from "../redux/slices/settings";

const ThemeProvider = ({ children }) => {
  return (
    <WipsieThemeProvider theme="dark">
      <CssBaseline />
      <NprogressBaseline type="bar" height="3px" />
      <TopProgressBar />
      {children}
    </WipsieThemeProvider>
  );
};

export default ThemeProvider;
