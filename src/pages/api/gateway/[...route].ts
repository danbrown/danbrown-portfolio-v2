import { NextApiRequest, NextApiResponse } from "next";

import httpProxy from "http-proxy";
import { microservicesUrls } from "@config/microservicesUrls";

const getProxy = (service: string) => {
  if (!microservicesUrls[service]) {
    throw new Error("Invalid service name");
  }

  return httpProxy.createProxyServer({
    /**
     * Get the actual backend service url from env variables.
     * We shouldn't prefix the env variable with NEXT_PUBLIC_* to avoid exposing it to the client.
     */
    target: microservicesUrls[service],
    autoRewrite: false,
    changeOrigin: true,
  });
};

const gatewayHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(async (resolve, reject) => {
    const route = req.query.route as string[]; // route is a array of path segments, e.g. /hello/me  = ['hello', 'me']
    // const routePath = "/" + route.slice(1).join("/"); // slice(1) removes the first element, which is always the ms name
    const microserviceName = route[0]; // the first element is always the microservice name

    // + Proxy the request to the api gateway
    // For the proxy to work, we need to remove the /api/gateway prefix from the url
    req.url = req.url.replace("/api/gateway", "");
    req.url = req.url.replace(`/${microserviceName}`, "");

    // get session from clerk

    // Headers copy setup
    const headers = req.headers;

    req.headers.cookie = ""; // don't forwards the cookies to the target server
    req.headers["Access-Control-Allow-Origin"] =
      headers["access-control-allow-origin"] || "*"; // set access control allow origin header
    req.headers["Content-Type"] = headers["content-type"] || "application/json"; // set content type header
    req.headers["Accept"] = headers["accept"] || "*/*"; // set accept header

    req.headers["Proxy-Authorization"] = `Basic ${Buffer.from(
      `${process.env.NEXT_PUBLIC_API_GATEWAY_CLIENT_ID}:${process.env.API_GATEWAY_CLIENT_SECRET}`
    ).toString("base64")}`; // set proxy authorization header
    // req.headers["token"] = `Bearer ${sessionToken}`; // set token header

    // get proxy
    getProxy(microserviceName).once("error", reject).web(req, res);
    /**
     * if an error occurs in the proxy, we will reject the promise.
     * it is so important. if you don't reject the promise,
     * you're facing the stalled requests issue.
     */
  });
};

export default gatewayHandler;

export const config = {
  api: {
    bodyParser: false,
  },
};
