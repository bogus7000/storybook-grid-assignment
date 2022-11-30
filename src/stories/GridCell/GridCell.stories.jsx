import React from "react";
import { GridCell } from "./GridCell";
import { GridRow } from "../GridRow/GridRow";
import { Card } from "../Card/Card";
import { Grid } from "../Grid/Grid";

export default {
  title: "Components/GridCell",
  component: GridCell,
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
      <GridCell {...args}>
        <Card></Card>
      </GridCell>
    </GridRow>
  </Grid>
);

export const Default = Template.bind({});

Default.args = {
  hideBelow: "sm",
};
