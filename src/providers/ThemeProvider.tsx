import { createContext, useContext, useEffect } from "react";
import dynamic from "next/dynamic";
const TopProgressBar = dynamic(() => import("../components/TopProgressBar"));
import {
  ThemeProvider as WipsieThemeProvider,
  CssBaseline,
  NprogressBaseline,
  darkTheme,
  WipsieThemes,
  lightTheme,
  WipsieThemesFonts,
} from "@wipsie/ui";
import "@wipsie/ui/dist/esm/static/styles/base.css";
import useLocalStorage from "@hooks/useLocalStorage";
import { useZustandStore } from "@zustand/ZustandStoreProvider";

const ThemeContext = createContext<{
  currentTheme: AvailableThemes;
  setCurrentTheme: (theme: AvailableThemes) => void;
}>({
  currentTheme: "dark",
  setCurrentTheme: () => {},
});

export const themesList = [
  "dark",
  "light",
  // "cosmic",
  // "danbrown",
  // "neonlights",
  // "swamp",
  // "discord",
  // "spotify",
  // "whatsapp",
];

export type AvailableThemes = "dark" | "light";
// | "cosmic"
// | "neonlights"
// | "swamp"
// | "danbrown"
// | "discord"
// | "spotify"
// | "whatsapp";

export const ThemeProvider = ({ children }) => {
  const { currentTheme, setCurrentTheme } = useZustandStore("settings");

  const theme: WipsieThemes | string =
    {
      dark: danbrownTheme,
      light: danbrownLightTheme,
      // cosmic: "cosmic",

      // // Custom themes
      // neonlights: neonlightsTheme,
      // swamp: swampTheme,
      // danbrown: danbrownTheme,
      // discord: discordTheme,
      // spotify: spotifyTheme,
      // whatsapp: whatsappTheme,
    }[currentTheme] || "dark";

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <WipsieThemeProvider theme={theme}>
        {/* <WipsieThemeProvider theme="light"> */}
        <CssBaseline />
        <NprogressBaseline type="bar" height="3px" />
        <TopProgressBar />
        {children}
      </WipsieThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeChange = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  return { currentTheme, setCurrentTheme };
};

const customTypography: WipsieThemesFonts = {
  ...lightTheme.font,

  h1: {
    ...lightTheme.font.h1,
    fontFamily:
      '"TT Firs Neue","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  h2: {
    ...lightTheme.font.h2,
    fontFamily:
      '"TT Firs Neue","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  h3: {
    ...lightTheme.font.h3,
    fontFamily:
      '"TT Firs Neue","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  h4: {
    ...lightTheme.font.h4,
    fontFamily:
      '"TT Firs Neue","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  h5: {
    ...lightTheme.font.h5,
    fontFamily:
      '"TT Firs Neue","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  h6: {
    ...lightTheme.font.h6,
    fontFamily:
      '"TT Firs Neue","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  subtitle1: {
    ...lightTheme.font.subtitle1,
    fontFamily:
      '"TT Firs Neue","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  subtitle2: {
    ...lightTheme.font.subtitle2,
    fontFamily:
      '"TT Firs Neue","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  body1: {
    ...lightTheme.font.body1,
    fontFamily:
      '"DM Sans","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  body2: {
    ...lightTheme.font.body2,
    fontFamily:
      '"DM Sans","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  caption1: {
    ...lightTheme.font.caption1,
    fontFamily:
      '"DM Sans","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  caption2: {
    ...lightTheme.font.caption2,
    fontFamily:
      '"DM Sans","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  label: {
    ...lightTheme.font.label,
    fontFamily:
      '"DM Sans","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  code: {
    ...lightTheme.font.code,
    fontFamily:
      '"DM Sans","Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
};

const danbrownTheme: WipsieThemes = {
  ...darkTheme,

  palette: {
    ...darkTheme.palette,

    shade: "#0E1217",
    background: "#1C1F26",
    highlight: "#383D47",

    basic: {
      "100": "#383D47",
      "300": "#283D47",
      "500": "#0E1217",
      "700": "#000000",
      "900": "#000000",
      shadow: "#0E12173D",
    },

    primary: {
      "100": "#FDECCA",
      "300": "#F5B362",
      "500": "#E06200",
      "700": "#A13400",
      "900": "#6B1700",
      shadow: "#A134003D",
    },

    secondary: {
      "100": "#FA96AE",
      "300": "#F06092",
      "500": "#CF0071",
      "700": "#95006F",
      "900": "#63005D",
      shadow: "#95006F3D",
    },

    success: {
      "100": "#73F389",
      "300": "#4FE778",
      "500": "#1BD760",
      "700": "#13B860",
      "900": "#0D9A5D",
      shadow: "#13B8603D",
    },
  },
  font: customTypography,
  layout: {
    ...darkTheme.layout,
    defaultShape: "square",
  },
};

const danbrownLightTheme: WipsieThemes = {
  ...darkTheme,

  palette: {
    ...lightTheme.palette,

    primary: {
      "100": "#FDECCA",
      "300": "#F5B362",
      "500": "#E06200",
      "700": "#A13400",
      "900": "#6B1700",
      shadow: "#A134003D",
    },

    secondary: {
      "100": "#FA96AE",
      "300": "#F06092",
      "500": "#CF0071",
      "700": "#95006F",
      "900": "#63005D",
      shadow: "#95006F3D",
    },

    success: {
      "100": "#73F389",
      "300": "#4FE778",
      "500": "#1BD760",
      "700": "#13B860",
      "900": "#0D9A5D",
      shadow: "#13B8603D",
    },
  },
  font: customTypography,
  layout: {
    ...lightTheme.layout,
    defaultShape: "square",
  },
};

const neonlightsTheme: WipsieThemes = {
  ...darkTheme,

  palette: {
    ...darkTheme.palette,

    highlight: "#433567",
    background: "#251644",
    shade: "#180931",

    primary: {
      100: "#FB72A4",
      300: "#F84F9E",
      500: "#F41794",
      700: "#AF0B89",
      900: "#750471",
      shadow: "#AF0B893D",
    },
  },
};

const swampTheme: WipsieThemes = {
  ...darkTheme,

  palette: {
    ...darkTheme.palette,

    highlight: "#272E32",
    background: "#202112",
    shade: "#151407",

    primary: {
      100: "#D7E17F",
      300: "#B7C359",
      500: "#8D9B2B",
      700: "#626F15",
      900: "#3E4A08",
      shadow: "#626F153D",
    },
  },
};

export const discordTheme: WipsieThemes = {
  ...darkTheme,

  palette: {
    ...darkTheme.palette,

    shade: "#2F3136",
    background: "#36393F",
    highlight: "#40444A",

    subtext: "#B8BBBE",

    basic: {
      "100": "#40444A",
      "300": "#36393F",
      "500": "#2F3136",
      "700": "#0E1217",
      "900": "#000000",
      shadow: "#0E12173D",
    },

    primary: {
      "100": "#9AA5FB",
      "300": "#808CF7",
      "500": "#5765F2",
      "700": "#4753C4",
      "900": "#2B35AE",
      shadow: "#4753C43D",
    },

    success: {
      "100": "#84D78D",
      "300": "#5BB06D",
      "500": "#2C7C45",
      "700": "#165938",
      "900": "#0E4731",
      shadow: "#1659383D",
    },

    danger: {
      "100": "#F99E8D",
      "300": "#F47970",
      "500": "#EE4245",
      "700": "#AB213B",
      "900": "#8A1535",
      shadow: "##8A15353D",
    },

    warning: {
      "100": "#F9D68D",
      "300": "#F7C170",
      "500": "#FAA91E",
      "700": "#B27A3B",
      "900": "#8E5A35",
      shadow: "#B27A3B3D",
    },
  },
};

export const spotifyTheme: WipsieThemes = {
  ...darkTheme,

  palette: {
    ...darkTheme.palette,

    shade: "#121212",
    background: "#181818",
    highlight: "#282828",

    basic: {
      "100": "#383D47",
      "300": "#282828",
      "500": "#181818",
      "700": "#121212",
      "900": "#0E1217",
      shadow: "#1212123D",
    },

    primary: {
      "100": "#73F389",
      "300": "#4FE778",
      "500": "#1BD760",
      "700": "#13B860",
      "900": "#0D9A5D",
      shadow: "#13B8603D",
    },
  },
};

export const whatsappTheme: WipsieThemes = {
  ...darkTheme,

  palette: {
    ...darkTheme.palette,

    shade: "#111B21",
    background: "#202C34",
    highlight: "#2A3942",

    basic: {
      "100": "#2A3942",
      "300": "#202C34",
      "500": "#111B21",
      "700": "#0E1217",
      "900": "#000000",
      shadow: "#0E12173D",
    },

    primary: {
      "100": "#C9FADD",
      "300": "#5DE4AE",
      "500": "#03A784",
      "700": "#017875",
      "900": "#004250",
      shadow: "#0178753D",
    },
  },
};
