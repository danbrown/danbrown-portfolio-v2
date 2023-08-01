import React from "react";
import { useState, useEffect } from "react";
import {
  InfoCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  StopOutlined,
  LoadingOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { toast, ToastOptions } from "react-toastify";
import {
  contrast,
  Flex,
  Spacing,
  Typography,
  useTheme,
} from "@wipsie/ui";

export default function useToaster() {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    (async () => {})();
  }, []);

  function enqueueToast(title: string, props: ToastProps & ToastOptions<{}>) {
    const {
      variant = "basic",
      icon = null,
      timeout = 5000,
      actions = null,
      ...otherProps
    } = props;

    const iconVariant = {
      primary: <InfoCircleOutlined />,
      secondary: <InfoCircleOutlined />,
      basic: <InfoCircleOutlined />,
      info: <InfoCircleOutlined />,
      success: <CheckCircleOutlined />,
      warning: <WarningOutlined />,
      danger: <StopOutlined />,
      loading: <LoadingOutlined spin />,
    }[variant];

    let colorVariant = theme.palette.highlight;
    switch (variant) {
      case "info":
        colorVariant = theme.palette.info[300];
        break;
      case "success":
        colorVariant = theme.palette.success[300];
        break;
      case "warning":
        colorVariant = theme.palette.warning[300];
        break;
      case "danger":
        colorVariant = theme.palette.danger[300];
        break;
      case "loading":
        colorVariant = theme.palette.info[300];
        break;
      case "primary":
        colorVariant = theme.palette.primary[300];
        break;
      case "secondary":
        colorVariant = theme.palette.secondary[300];
        break;
      case "basic":
      default:
        colorVariant = theme.palette.highlight;
    }

    let backgroundVariant = theme.palette.shade;
    switch (variant) {
      case "info":
        backgroundVariant = theme.palette.info[500];
        break;
      case "success":
        backgroundVariant = theme.palette.success[500];
        break;
      case "warning":
        backgroundVariant = theme.palette.warning[500];
        break;
      case "danger":
        backgroundVariant = theme.palette.danger[500];
        break;
      case "loading":
        backgroundVariant = theme.palette.info[500];
        break;
      case "primary":
        backgroundVariant = theme.palette.primary[500];
        break;
      case "secondary":
        backgroundVariant = theme.palette.secondary[500];
        break;
      case "basic":
      default:
        backgroundVariant = theme.palette.shade;
    }

    const ActionContent = actions;
    const content = (
      <Flex align="center" justify="start" fullWidth>
        <Typography variant="body1" color={contrast(backgroundVariant)}>
          {title}
        </Typography>
        {actions && (
          <>
            <Spacing height={2} />
            <ActionContent toast={toast} />
          </>
        )}
      </Flex>
    );

    const iconContent = (
      <Flex align="start" justify="start" fullHeight>
        <Typography variant="body1" color={contrast(backgroundVariant)}>
          {icon || iconVariant}
        </Typography>
      </Flex>
    );

    toast(content, {
      icon: iconContent,
      autoClose: timeout,
      progressStyle: {
        background: colorVariant,
      },
      style: {
        background: backgroundVariant,
        borderRadius: theme.layout.radius,
      },
      closeButton: (
        <div style={{ color: contrast(backgroundVariant) }}>
          <CloseOutlined />
        </div>
      ),
      ...otherProps,
    });
  }

  return {
    enqueueToast,
  };
}

type ToastProps = {
  variant?: ToastType;
  icon?: React.ReactNode;
  timeout?: number | false;
  actions?: (toast: any) => React.ReactElement;
};

type ToastType =
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "loading"
  | "primary"
  | "secondary"
  | "basic";
