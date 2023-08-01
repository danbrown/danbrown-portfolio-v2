import ToastProvider from "./ToastProvider";
import { SWRConfig } from "swr";
import apiWorker from "@utils/apiWorker";
import { ThemeProvider } from "./ThemeProvider";
import { LoadingProvider } from "./LoadingProvider";

const Providers = ({ children }) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 5000, // the interval for checking deduping (in ms)
        fetcher: (url) =>
          apiWorker
            .get(url)
            .then((res) => res.data)
            .catch((err) => null),
      }}
    >
      <ThemeProvider>
        <ToastProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </ToastProvider>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default Providers;
