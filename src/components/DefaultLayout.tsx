/* eslint-disable react/display-name */
import { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  Spacing,
  useTheme,
  Page,
  Switch,
  Flex,
  Fixed,
  Box,
  Container,
  Link,
  Hidden,
  Grid,
  PageProps,
} from "@wipsie/ui";
import { Head, HeadProps } from "./Head";

export type DefaultLayoutProps = PageProps & {
  children: React.ReactNode;
  meta?: HeadProps;
};

export function DefaultLayout({
  meta,
  children,
  ...otherProps
}: DefaultLayoutProps) {
  return (
    <Page
      backgroundColor="#1E2DEA"
      shape="square"
      display="flex"
      align="center"
      justify="center"
      maxWidth="100vw"
      maxHeight="100vh"
      width="100vw"
      height="100vh"
      {...otherProps}
      style={{ overflow: "hidden", ...otherProps?.style }}
    >
      <Head {...meta} />

      {/* <Header /> */}

      {/* <Flex mt={{ xs: -1, md: 2 }} p={2} direction="column"> */}
      {children}
      {/* </Flex> */}

      {/* <Footer /> */}
    </Page>
  );
}
