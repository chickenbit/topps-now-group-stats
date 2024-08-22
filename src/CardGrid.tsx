import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from "react";
import { ColDef } from "ag-grid-community";
import { CardData } from "./CardData";

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}
export function CardGrid({ cardData }: { cardData: CardData[] }) {
  // Row Data: The data to be displayed.
  // eslint-disable-next-line
  const [rowData, setRowData] = useState<CardData[]>(cardData);
  // const [rowData, setRowData] = useState<IRow[]>([
  //     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //     { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //     { make: "Mercedes", model: "EQA", price: 48890, electric: true },
  //     { make: "Fiat", model: "500", price: 15774, electric: false },
  //     { make: "Nissan", model: "Juke", price: 20675, electric: false },
  //   ]);

  // Column Definitions: Defines & controls grid columns.
  // eslint-disable-next-line
  const [colDefs, setColDefs] = useState<ColDef<CardData>[]>([
    { field: "number" },
    { field: "name" },
    { field: "printRun" },
    { field: "numberOrdered" },
    { field: "otherHits" },
    { field: "blueHits" },
    { field: "purpleHits" },
    { field: "redHits" },
    { field: "orangeHits" },
    { field: "yellowHits" },
  ]);
  // const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  //   { field: "electric" },
  // ]);
  const defaultColDef: ColDef = {
    flex: 1,
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      id="myGrid"
      className="ag-theme-balham-dark"
      style={{ width: "100%", height: "100%" }}
      // style={{width:500, height: 500}}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
