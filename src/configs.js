export const catalogConfigs = {
  title: {
    default: "RIGAS",
    en: "RIGAS",
  },
  langSet: ["en"],
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
            "atmospheric-standards-mixture",
            "automobile-exhaust-standards",
            "petrochemical-natural-gas-standards",
            "petrochemical-natural-gas-standards-mixture",
            "odor-standards",
            "odor-standards-mixture",
            "voc-standards",
            "voc-standards-mixture",
          ],
        },
        {
          name: "mixed-gas",
          outlets: ["laser-gas-mixtures", "other-gas-mixtures"],
        },
        {
          name: "rigas-one",
          outlets: [
            "rigas-one",
            "rigas-one-reactive",
            "pams",
            "pams-chromatogram",
            "to-14a",
            "to-14a-chromatogram",
          ],
        },
        "regulator",
        "regulator-other-information",
      ],
    },
    "last",
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
