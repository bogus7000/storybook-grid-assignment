import "../src/index.css";

const customViewportOptions = {
  XSM: {
    name: "XSM",
    styles: {
      width: "360px",
      height: "840px",
    },
  },
  SM: {
    name: "SM",
    styles: {
      width: "600px",
      height: "1300px",
    },
  },
  MD: {
    name: "MD",
    styles: {
      width: "834px",
      height: "1480px",
    },
  },
  LG: {
    name: "LG",
    styles: {
      width: "1024px",
      height: "2200px",
    },
  },
  XLG: {
    name: "XLG",
    styles: {
      width: "1288px",
      height: "2500px",
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
