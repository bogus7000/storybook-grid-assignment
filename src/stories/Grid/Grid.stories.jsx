import React from "react";
import { Grid } from "./Grid";
import { GridRow } from "../GridRow/GridRow";
import { GridCell } from "../GridCell/GridCell";
import { Card } from "../Card/Card";

export default {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "XSM",
    },
  },
};

const ResponsiveCardsTemplate = (args) => (
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

export const ResponsiveCards = ResponsiveCardsTemplate.bind({});
ResponsiveCards.argTypes = {
  transparent: {
    control: { type: "boolean" },
  },
};
ResponsiveCards.args = {
  transparent: false,
};

const ResponsiveImagesTemplate = () => (
  <Grid>
    <GridRow>
      <GridCell>
        <img
          src="https://expertus.ee/wp-content/uploads/2019/02/placeholder-16.9.jpg"
          alt="16:9"
        />
      </GridCell>
      <GridCell>
        <img
          src="https://expertus.ee/wp-content/uploads/2019/02/placeholder-16.9.jpg"
          alt="16:9"
        />
      </GridCell>
    </GridRow>
    <GridRow>
      <GridCell>
        <img
          src="https://expertus.ee/wp-content/uploads/2019/02/placeholder-16.9.jpg"
          alt="16:9"
        />
      </GridCell>
    </GridRow>
  </Grid>
);

export const ResponsiveImages = ResponsiveImagesTemplate.bind({});
ResponsiveImages.argTypes = {};

const PlaygroundTemplate = (args) => (
  <Grid>
    <GridRow>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </GridRow>

    <GridRow>
      <GridCell>
        <Card></Card>
      </GridCell>
      <GridCell>
        <Card></Card>
      </GridCell>
    </GridRow>

    <GridRow>
      <Card></Card>
    </GridRow>
  </Grid>
);

export const Playground = PlaygroundTemplate.bind({});
