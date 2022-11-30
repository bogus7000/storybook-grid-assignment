import React from "react";
import { Grid } from "./Grid";
import { GridRow } from "../GridRow/GridRow";
import { GridCell } from "../GridCell/GridCell";
import { Card } from "../Card/Card";

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: {
    transparent: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "XSM",
    },
  },
};

const ResponsiveTemplate = (args) => (
  <Grid>
    <GridRow>
      <GridCell>
        <Card transparent={args.transparent}></Card>
      </GridCell>
      <GridCell>
        <Card transparent={args.transparent}></Card>
      </GridCell>
      <GridCell hideBelow={"sm"}>
        <Card transparent={args.transparent}></Card>
      </GridCell>
      <GridCell hideBelow={"lg"}>
        <Card transparent={args.transparent}></Card>
      </GridCell>
    </GridRow>

    <GridRow>
      <GridCell>
        <Card></Card>
      </GridCell>
      <GridCell hideBelow={"sm"}>
        <Card></Card>
      </GridCell>
      <GridCell hideBelow={"lg"}>
        <Card></Card>
      </GridCell>
    </GridRow>

    <GridRow>
      <GridCell hideBelow={"sm"}>
        <Card></Card>
      </GridCell>
      <GridCell hideBelow={"lg"}>
        <Card></Card>
      </GridCell>
    </GridRow>

    <GridRow hideBelow={"lg"}>
      <Card></Card>
    </GridRow>
  </Grid>
);

export const ResponsiveCards = ResponsiveTemplate.bind({});
ResponsiveCards.args = {
  transparent: false,
};
