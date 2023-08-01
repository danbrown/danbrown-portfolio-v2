import React, { useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Box, useTheme } from "@wipsie/ui";
import "react-toastify/dist/ReactToastify.min.css";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

function ToastProvider({ children }) {
  const theme = useTheme();

  const toastContainerStyle = useMemo(() => {
    return {};
  }, [theme]);

  const toastStyle = useMemo(() => {
    return {
      background: theme.palette.shade,
      color: theme.palette.text,
    };
  }, [theme]);

  const toastBodyStyle = useMemo(() => {
    return {
      color: theme.palette.text,
      alignItems: "flex-start",
    };
  }, [theme]);

  const toastProgressStyle = useMemo(() => {
    return {
      background: theme.palette.highlight,
      color: theme.palette.text,
    };
  }, [theme]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={5}
        style={toastContainerStyle}
        toastStyle={toastStyle}
        bodyStyle={toastBodyStyle}
        progressStyle={toastProgressStyle}
      />
      {children}
    </>
  );
}

export default ToastProvider;
