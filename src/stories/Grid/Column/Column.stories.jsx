import React from "react";
import { Column } from "./Column";
import { Grid } from "../Grid";
import { Row } from "../Row/Row";
import { Card } from "../../Card/Card";

export default {
  title: "Components/Grid/Column",
  component: Column,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "XSM",
    },
  },
};

const ColumnTemplate = (args) => (
  <Grid>
    <Row>
      <Column {...args}>
        <Card></Card>
      </Column>
    </Row>
  </Grid>
);

export const Default = ColumnTemplate.bind({});
