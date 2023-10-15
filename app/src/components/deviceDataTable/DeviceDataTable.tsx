import React from "react";
import { useRecoilState } from "recoil";
import { IDeviceData } from "../../constants/interfaces/IDeviceData";
import fetchData from "../../utils/apiUtils";
import { useQuery } from "react-query";
import { deviceDataState } from "../../state/recoil";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { Grid } from "@mui/material";
import { deviceTableColumns } from "./deviceTableColumns";
import "./deviceDataTable.css";
import rowStyles from "../../styles";

const mapDeviceDataToGridRow = (device: IDeviceData) => ({
  id: device.query.id.value || "N/A",
  fCntUp: device.lastData.content.fCntUp || "N/A",
  barrierId: device.lastData.content.meta?.barrierId || "N/A",
  battery: device.lastData.content.battery || "N/A",
  lat: device.lastData.content.lat || "N/A",
  lng: device.lastData.content.lng || "N/A",
});

interface IDeviceDataTable {
  openModal: (e: string) => void;
}

const DeviceDataTable = ({ openModal }: IDeviceDataTable) => {
  const { data, error, isLoading } = useQuery("devices", fetchData);

  const [deviceData, setDeviceData] = useRecoilState(deviceDataState);

  const gridRows = deviceData.map(mapDeviceDataToGridRow);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const devices = data || [];
  setDeviceData(devices);

  const columns = deviceTableColumns(openModal);

  return (
    <>
      <Grid className="table-wrapper" sx={rowStyles}>
        <DataGridPro
          columns={columns}
          rows={gridRows}
          getRowId={(row) => row.id}
          autoHeight
          pagination
          sx={{ fontSize: "18px", padding: "10px" }}
          initialState={{ pinnedColumns: { right: ["actions"] } }}
        />
      </Grid>
    </>
  );
};

export default DeviceDataTable;
