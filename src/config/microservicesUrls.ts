export const microservicesUrls = {
  auth:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_AUTH_URL
      : "https://api-auth.zetahex.com",

  apps:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APPS_URL
      : "https://api-apps.zetahex.com",

  inferences:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_INFERENCES_URL
      : "https://api-inferences.zetahex.com",
  // : "http://localhost:4006",

  media:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_MEDIA_URL
      : "https://api-media.zetahex.com",

  orders:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_ORDERS_URL
      : "https://api-orders.zetahex.com",
};
