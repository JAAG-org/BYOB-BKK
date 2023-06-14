exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/register`,
    toPath: `https://docs.google.com/forms/d/e/1FAIpQLScHKDI9dAQuY9tdlcGs8fBDFwVo25c1epdl0HMF5xArAMNlpg/viewform`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
