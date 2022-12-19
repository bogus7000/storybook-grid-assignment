import React from "react";
import { Grid } from "./Grid";
import { Column } from "./Column/Column";
import { Card } from "../Card/Card";
import { Row } from "./Row/Row";

export default {
  title: "Components/Grid/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "XSM",
    },
  },
};

const ControlledLayoutTemplate = () => (
  <Grid>
    <Row>
      <Column xsm={4} sm={6} md={3} lg={6} xlg={6}>
        <Card></Card>
      </Column>
      <Column xsm={4} sm={6} md={3} lg={6} xlg={6}>
        <Card></Card>
      </Column>
      <Column xsm={4} sm={6} md={3} lg={6} xlg={6}>
        <Card></Card>
      </Column>
    </Row>
  </Grid>
);

export const ControlledLayout = ControlledLayoutTemplate.bind({});

const AutoLayoutTemplate = () => (
  <Grid>
    <Row>
      <Column>
        <Card></Card>
      </Column>
      <Column>
        <Card></Card>
      </Column>
      <Column>
        <Card></Card>
      </Column>
      <Column>
        <Card></Card>
      </Column>
      <Column>
        <Card></Card>
      </Column>
      <Column>
        <Card></Card>
      </Column>
    </Row>
  </Grid>
);

export const AutoLayout = AutoLayoutTemplate.bind({});
