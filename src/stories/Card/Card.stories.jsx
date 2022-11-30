import React from "react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    viewport: {
      defaultViewport: "XSM",
    },
  },
};

const DefaultTemplate = (args) => <Card {...args}></Card>;

export const Default = DefaultTemplate.bind({});
