export const catalogConfigs = {
  title: {
    default: "SUNGWONind",
    ko: "RIGAS",
  },
  langSet: ["ko", "en"],
  pageMap: [
    "intro",
    "index",
    {
      name: "company",
      outlets: ["overview", "history", "performance", "global-network", "analysis-process"],
    },
    {
      name: "product",
      outlets: [
        "traceability",
        "cover",
        {
          name: "standard-gas",
          outlets: [
            "atmospheric-standards",
            "automobile-exhaust-standards",
            "petrochemical-natural-gas-standards",
            "odor-standards",
            "voc-standards",
          ],
        },
        {
          name: "mixed-gas",
          outlets: ["laser-gas-mixtures", "other-gas-mixtures"],
        },
        {
          name: "rigas-one",
          outlets: ["rigas-one"],
        },
      ],
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
