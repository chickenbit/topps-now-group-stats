import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  ConfigProvider,
  Flex,
  Layout,
  Row,
  Typography,
} from "antd";
import { CardGrid } from "./CardGrid";
import { cardData } from "./rawData";
import { CardData } from "./CardData";
import { CardFunnel, data } from "./CardFunnel";

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 500,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const gridStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 100,
  color: "#fff",
  backgroundColor: "#0958d9",
};
const chartStyle: React.CSSProperties = {
  textAlign: "center",
  height: 500,
  // lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

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

async function loadCardDataFromJson(url: string): Promise<CardData[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: CardData[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching or parsing JSON: ${error}`);
    return [];
  }
}
// const cardData: CardData[] = loadCardDataFromJson(filePath);
// const App: React.FC = () => (
function App() {
  // const [cardData, setCardData] = useState<CardData[]>([]); // State to store card data
  // useEffect(() => {
  //   const filePath = "./cards.json"; // Replace with your file path or URL
  //   async function fetchData() {
  //     const data = await loadCardDataFromJson(filePath);
  //     setCardData(data); // Update the state with the fetched data
  //   }

  //   fetchData(); // Call the async function to load data
  // }, []); // Empty dependency array ensures this runs only once
  return (
    <>
      <div className="App">
        <Flex gap="middle" wrap>
          <Layout style={layoutStyle}>
            <Header style={headerStyle}>Welcome to ToppsNOW!</Header>
            <Content style={gridStyle}>
              <CardGrid cardData={cardData} />
            </Content>
            <Content style={chartStyle}>
              <CardFunnel data={data} />
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Flex>
        {/* <Row>
          <Col flex="auto">
            <div style={{ height: 500, width: 800 }}></div>
            <CardGrid />
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default App;
