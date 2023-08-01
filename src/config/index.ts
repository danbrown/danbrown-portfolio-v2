// SITE CONSTANTS
export const SITE_TITLE = "DanBrown";
export const SITE_DESCRIPTION = "DanBrown";
export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "https://docs.wipsie.com"
    : "http://localhost:3005";
export const isProd = process.env.NODE_ENV === "production";
