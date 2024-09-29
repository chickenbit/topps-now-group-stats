import React from "react";
import { FunnelDatum, ResponsiveFunnel } from "@nivo/funnel";

export interface ColoredFunnelDatum extends FunnelDatum {
  color: string;
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
export function CardFunnel({ data }: { data: ColoredFunnelDatum[] }) {
  return (
    <ResponsiveFunnel
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      valueFormat=" >-#0.0~d"
      colors={(datum) => datum.color} // Use custom color from datum
      //   colors={{ scheme: "spectral" }}
      direction="horizontal"
      borderWidth={20}
      labelColor={{ from: "color", modifiers: [["darker", 1.6]] }} // Dynamically adjust the label color based on the datum color
      //   labelColor={{
      //     from: "color",
      //     modifiers: [["brighter", 3]],
      //   }}
      enableBeforeSeparators={false}
      enableAfterSeparators={false}
      beforeSeparatorLength={100}
      beforeSeparatorOffset={20}
      afterSeparatorLength={100}
      afterSeparatorOffset={20}
      currentPartSizeExtension={10}
      currentBorderWidth={40}
      motionConfig="wobbly"
    />
  );
}
