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
} from "@wipsie/ui";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ meta, children, ...otherProps }: any) {
  return (
    <Container
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
      style={{ overflow: "hidden" }}
    >
      <Head {...meta} />

      {/* <Header /> */}

      {/* <Flex mt={{ xs: -1, md: 2 }} p={2} direction="column"> */}
      {children}
      {/* </Flex> */}

      {/* <Footer /> */}
    </Container>
  );
}

export default DefaultLayout;
