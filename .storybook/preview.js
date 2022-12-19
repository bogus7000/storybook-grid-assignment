import "../src/index.scss";

const customViewportOptions = {
  XSM: {
    name: "XSM",
    styles: {
      width: "360px",
      height: "3000px",
    },
  },
  SM: {
    name: "SM",
    styles: {
      width: "600px",
      height: "3000px",
    },
  },
  MD: {
    name: "MD",
    styles: {
      width: "800px",
      height: "3000px",
    },
  },
  LG: {
    name: "LG",
    styles: {
      width: "1024px",
      height: "3000px",
    },
  },
  XLG: {
    name: "XLG",
    styles: {
      width: "1288px",
      height: "3000px",
    },
  },
};

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#f6f8f7",
      },
    ],
  },
  viewport: {
    viewports: {
      ...customViewportOptions,
    },
  },
};
