export const catalogConfigs = {
  title: {
    default: "SUNGWONind",
    ko: "RIGAS",
  },
  langSet: ["ko", "en"],
  pageMap: [
    "intro",
    {
      name: "cover",
      outlets: ["index", "overview"],
    },
    {
      name: "company",
      outlets: ["history", "global-network"],
    },
    {
      name: "product",
      outlets: ["cover", "product01", "product02"],
    },
    "last"
  ],
  autoplay: {
    delay: 4000,
    loop: true,
  },
  width: 1920,
  height: 1080,
  breakpoint: 768,
};

const ENV = process.env;
export const IS_DEV = ENV.REACT_APP_IS_DEV;
export const ROUTER_TYPE = ENV.REACT_APP_ROUTER_TYPE;
export const BASE_NAME = ENV.REACT_APP_BASE_NAME;
export const PUBLIC_URL = ENV.PUBLIC_URL;
export const IMG_URL = `${PUBLIC_URL}/images`;
