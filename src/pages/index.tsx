import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import Brightness1Icon from "@material-ui/icons/Brightness1";

import { Page, MuiLink } from "@components";

import styles from "../styles/Home.module.css";

// + STYLES
const useStyles = makeStyles((theme: any) => {
  return {
    root: {
      height: "100vh",

      paddingTop: theme.spacing(3),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
      backgroundColor: "#bcc7d88a",

      "@media (max-width: 1000px)": {
        alignItems: "center",
        overflow: "scroll",
      },
    },

    background: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      opacity: 1,
      zIndex: -1,
      backgroundImage: 'url("/assets/tumblr.png")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
});

// + PAGE
export default function Hello() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Page className={classes.root} title="Daniel Brown">
      <div className={classes.background}></div>

      <br />

      <Grid container direction="column" justify="center" alignItems="center">
        <Box>LOGO</Box>

        <Grid
          item
          container
          className={styles.container}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid item className={styles.item} xs={9} md={3}>
            <Box className={styles.board}></Box>
            <h2 className={styles.title}>Projects</h2>
          </Grid>

          <Grid item className={styles.item} xs={9} md={3}>
            <Box className={styles.board}></Box>
            <h2 className={styles.title}>Skills</h2>
          </Grid>

          <Grid item className={styles.item} xs={9} md={3}>
            <Box className={styles.board}></Box>
            <h2 className={styles.title}>Contact</h2>
          </Grid>
        </Grid>

        <Box>footer links</Box>
      </Grid>

      <Signature />
    </Page>
  );
}

function Signature() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#111",
        textAlign: "center",
        color: "white",
        padding: 8,
      }}
    >
      Copyright © 2018-{new Date().getFullYear()} Daniel Brown , V2.1
    </div>
  );
}
