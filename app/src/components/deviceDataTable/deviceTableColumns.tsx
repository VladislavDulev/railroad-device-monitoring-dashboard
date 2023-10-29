import IconButton from "@mui/material/IconButton";
import { Info } from "react-feather";
import { StringConstants } from "../../constants/types/StringConstants";

export const deviceTableColumns = (openModal: (id: string) => void) => [
  {
    field: "barrierId",
    headerName: "Barrier ID",
    width: 250,
    cellClassName: "barrierId-cells-theme",
    headerClassName: "column-header",
  },
  {
    field: "fCntUp",
    headerName: "Uplink Frame Counter",
    width: 250,
    cellClassName: "fCntUp-cells-theme",
    headerClassName: "column-header",
  },
  {
    field: "battery",
    headerName: "Battery",
    width: 410,
    headerClassName: "column-header",
    cellClassName: (params: any) =>
      params.value <= 20
        ? "low-battery-wrapper"
        : params.value <= 50
        ? "medium-battery-wrapper"
        : "high-battery-wrapper",
    renderCell: (params: any) => (
      <div
        className={
          params.value <= 20
            ? "low-battery"
            : params.value <= 50
            ? "medium-battery"
            : params.value > 50 || params.value <= 100
            ? "high-battery"
            : "no-battery"
        }
        style={{
          width: `${params.value * 4}px`,
          borderRadius: "10px",
          paddingLeft: "15px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        {params.value === StringConstants.NotAvailable
          ? `${params.value}`
          : `${params.value}%`}
      </div>
    ),
  },
  {
    field: "lat",
    headerName: "Latitude",
    width: 350,
    cellClassName: "latitude-cells-theme",
    headerClassName: "column-header",
  },
  {
    field: "lng",
    headerName: "Longitude",
    width: 350,
    cellClassName: "longitude-cells-theme",
    headerClassName: "column-header",
  },
  {
    field: "actions",
    headerName: "Actions",
    resizable: false,
    renderCell: (params: any) => (
      <IconButton onClick={() => openModal(params.row.id)}>
        <Info />
      </IconButton>
    ),
    headerClassName: "column-header",
  },
];
