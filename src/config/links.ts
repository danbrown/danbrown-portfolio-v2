const MAIN_SERVICE =
  process.env.NEXT_PUBLIC_MAIN_SERVICE || "http://localhost:5003";

export const serviceLinks = {
  main: `${MAIN_SERVICE}`,
  userProfile: `${MAIN_SERVICE}/u`,
  projectProfile: `${MAIN_SERVICE}/p`,
  auth: {
    login: `${MAIN_SERVICE}/sign-in`,
    register: `${MAIN_SERVICE}/sign-up`,
    logout: `${MAIN_SERVICE}/api/auth/logout`,
  },
  dashboard: `${MAIN_SERVICE}/dashboard`,
  accountDashboard: `${MAIN_SERVICE}/user`,

  pricing: `${MAIN_SERVICE}/pricing`,

  collections: `${MAIN_SERVICE}/`,

  beta: `${MAIN_SERVICE}/beta`,
  faqs: `${MAIN_SERVICE}/faqs`,
  blog: `${MAIN_SERVICE}/blog`,
  blogHome: `${MAIN_SERVICE}/blog?tag=all`,
  guides: `${MAIN_SERVICE}/blog?tag=guides`,
  roadmap: `${MAIN_SERVICE}/blog?tag=roadmap`,

  restrictions: `${MAIN_SERVICE}/restrictions`,
  contactUs: `${MAIN_SERVICE}/contact`,
  terms: `${MAIN_SERVICE}/terms`,
  privacy: `${MAIN_SERVICE}/privacy`,
  returns: `${MAIN_SERVICE}/returns`,

  twitter: "https://twitter.com/",
  discord: "https://discord.gg/cG7JyeHRjm",
  instagram: "https://www.instagram.com/dreamforge.app/",

  widgets: {
    vote: `${MAIN_SERVICE}/widgets/vote`,
  },
};
