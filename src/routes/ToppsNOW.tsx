import React, { useEffect, useRef, useState } from "react";
import { Flex, Layout, Typography } from "antd";
import { CardGrid } from "../CardGrid";
import { cardData as staticCardData } from "../rawData";
import { CardData } from "../CardData";
import { CardFunnel, ColoredFunnelDatum } from "../CardFunnel";
import { AgGridReact } from "ag-grid-react";

const { Header, Footer, Content } = Layout;
const { Paragraph, Text } = Typography;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

// const contentStyle: React.CSSProperties = {
//   textAlign: "center",
//   minHeight: 500,
//   lineHeight: "120px",
//   color: "#fff",
//   backgroundColor: "#0958d9",
// };
const gridStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 300,
  color: "#fff",
  backgroundColor: "#0958d9",
};
const chartStyle: React.CSSProperties = {
  textAlign: "center",
  height: 500,
  // lineHeight: "120px",
  // color: "#fff",
  // backgroundColor: "#0958d9",
};

// const siderStyle: React.CSSProperties = {
//   textAlign: "center",
//   lineHeight: "120px",
//   color: "#fff",
//   backgroundColor: "#1677ff",
// };

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};

function ToppsNOW() {
  // const [cardData, setCardData] = useState<CardData[]>(staticCardData); // State to store card data
  const cardData = staticCardData;
  const gridRef = useRef<AgGridReact>(null); // Ref for the grid instance
  const [printRun, setPrintRun] = useState(0);
  const [cardRows, setCardRows] = useState(staticCardData.length);
  const [funnelData, setFunnelData] = useState<ColoredFunnelDatum[]>([
    { id: "ordered", value: 0, label: "Ordered", color: "green" },
    { id: "yellow", value: 0, label: "/1", color: "yellow" },
    { id: "orange", value: 0, label: "/5", color: "orange" },
    { id: "red", value: 0, label: "/10", color: "red" },
    { id: "purple", value: 0, label: "/25", color: "purple" },
    { id: "blue", value: 0, label: "/49", color: "blue" },
  ]);

  const updateFunnelData = (data: CardData[]) => {
    let printRun = 0;
    let ordered = 0;
    let yellow = 0;
    let orange = 0;
    let red = 0;
    let purple = 0;
    let blue = 0;
    data.forEach((card) => {
      printRun += card.printRun;
      ordered += card.numberOrdered;
      yellow += card.yellowHits;
      orange += card.orangeHits;
      red += card.redHits;
      purple += card.purpleHits;
      blue += card.blueHits;
    });
    setPrintRun(printRun);
    setFunnelData([
      { id: "ordered", value: ordered, label: "Ordered", color: "green" },
      { id: "blue", value: blue, label: "/49", color: "blue" },
      { id: "purple", value: purple, label: "/25", color: "purple" },
      { id: "red", value: red, label: "/10", color: "red" },
      { id: "orange", value: orange, label: "/5", color: "orange" },
      { id: "yellow", value: yellow, label: "/1", color: "yellow" },
    ]);
  };

  useEffect(() => {
    updateFunnelData(cardData);
  }, [cardData]);

  const onFilterChanged = () => {
    if (gridRef.current) {
      // Get filtered row data from the grid API
      // const filteredData = gridRef.current.api.getDisplayedRowAtIndex(0)?.data;
      const allFilteredData = [];
      setCardRows(gridRef.current.api.getDisplayedRowCount());
      for (let i = 0; i < gridRef.current.api.getDisplayedRowCount(); i++) {
        const node = gridRef.current.api.getDisplayedRowAtIndex(i);
        if (node && node.data) {
          allFilteredData.push(node.data);
        }
      }
      updateFunnelData(allFilteredData); // Update chart data with filtered rows
    }
  };

  return (
    <>
      <div className="App">
        <Flex gap="middle" wrap>
          <Layout style={layoutStyle}>
            <Header style={headerStyle}>Welcome to ToppsNOW!</Header>
            <Paragraph>
              <Text>
                Total Print Run of {printRun} cards over {cardRows} cards is
                average of {Math.floor(printRun / cardRows)}printed per card.
              </Text>
            </Paragraph>
            <Content style={gridStyle}>
              <CardGrid
                cardData={cardData}
                gridRef={gridRef}
                agGridProps={{ onFilterChanged: onFilterChanged }}
              />
            </Content>
            <Content style={chartStyle}>
              <CardFunnel data={funnelData} />
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Flex>
      </div>
    </>
  );
}

export default ToppsNOW;
