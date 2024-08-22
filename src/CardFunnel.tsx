import { FunnelDatum, ResponsiveFunnel } from "@nivo/funnel";

export const data = [
  {
    id: "step_sent",
    value: 81395,
    label: "Sent",
  },
  {
    id: "step_viewed",
    value: 51101,
    label: "Viewed",
  },
  {
    id: "step_clicked",
    value: 45176,
    label: "Clicked",
  },
  {
    id: "step_add_to_card",
    value: 42109,
    label: "Add To Card",
  },
  {
    id: "step_purchased",
    value: 26292,
    label: "Purchased",
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export function CardFunnel({ data }: { data: FunnelDatum[] }) {
  return (
    <ResponsiveFunnel
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      valueFormat=">-.4s"
      colors={{ scheme: "spectral" }}
      borderWidth={20}
      labelColor={{
        from: "color",
        modifiers: [["darker", 3]],
      }}
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
