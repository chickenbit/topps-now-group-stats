import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { useState } from "react";
import { ColDef } from "ag-grid-community";
import { CardData } from "./CardData";

interface CardGridProps {
  cardData: CardData[];
  gridRef: React.RefObject<AgGridReact>;
  agGridProps?: any;
}

export function CardGrid({ cardData, gridRef, agGridProps }: CardGridProps) {
  // eslint-disable-next-line
  const [rowData, setRowData] = useState<CardData[]>(cardData);
  // eslint-disable-next-line
  const [colDefs, setColDefs] = useState<ColDef<CardData>[]>([
    { field: "number" },
    { field: "name", filter: true },
    { field: "printRun", headerName: "PR" },
    { field: "numberOrdered" },
    { field: "otherHits" },
    { field: "blueHits", headerName: "/49" },
    { field: "purpleHits", headerName: "/25" },
    { field: "redHits", headerName: "/10" },
    { field: "orangeHits", headerName: "/5" },
    { field: "yellowHits", headerName: "/1" },
  ]);
  const defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <div
      id="myGrid"
      className="ag-theme-balham-dark"
      style={{ width: "100%", height: "100%" }}
      // style={{width:500, height: 500}}
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        {...agGridProps}
      />
    </div>
  );
}
