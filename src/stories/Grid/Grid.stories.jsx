import React from "react";
import { Grid } from "./Grid";
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

const ControlledLayoutTemplate = () => (
  <Grid>
    <div className="grid--row">
      <div className="grid--col col-xsm-4 col-sm-6 col-md-3 col-lg-6 col-xlg-6">
        <Card></Card>
      </div>
      <div className="grid--col col-xsm-4 col-sm-6 col-md-3 col-lg-6 col-xlg-6">
        <Card></Card>
      </div>
      <div className="grid--col col-xsm-4 col-sm-6 col-md-2 col-lg-4 col-xlg-4">
        <Card></Card>
      </div>
    </div>
  </Grid>
);

export const ControlledLayout = ControlledLayoutTemplate.bind({});

const AutoLayoutTemplate = () => (
  <Grid>
    <div className="grid--row">
      <div className="grid--col">
        <Card></Card>
      </div>
      <div className="grid--col">
        <Card></Card>
      </div>
      <div className="grid--col">
        <Card></Card>
      </div>
      <div className="grid--col">
        <Card></Card>
      </div>
      <div className="grid--col">
        <Card></Card>
      </div>
      <div className="grid--col">
        <Card></Card>
      </div>
    </div>
  </Grid>
);

export const AutoLayout = AutoLayoutTemplate.bind({});
