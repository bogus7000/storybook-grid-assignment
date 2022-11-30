import React from "react";
import { GridRow } from "./GridRow";
import { Card } from "../Card/Card";
import { Grid } from "../Grid/Grid";

export default {
  title: "Components/GridRow",
  component: GridRow,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "SM",
    },
  },
};

const Template = (args) => (
  <Grid>
    <GridRow>
      <Card></Card>
      <Card></Card>
    </GridRow>
    <GridRow {...args}>
      <Card></Card>
      <Card></Card>
    </GridRow>
  </Grid>
);

export const Default = Template.bind({});

Default.args = {
  hideBelow: "sm",
};
