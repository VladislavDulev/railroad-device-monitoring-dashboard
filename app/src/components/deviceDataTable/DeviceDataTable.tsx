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
import { useEffect, useState } from "react";
import { StringConstants } from "../../constants/types/StringConstants";
import LoaderComponent from "../loader/Loader";

const mapDeviceDataToGridRow = (device: IDeviceData) => ({
  id: device.query.id.value || StringConstants.NotAvailable,
  fCntUp: device.lastData.content.fCntUp || StringConstants.NotAvailable,
  barrierId:
    device.lastData.content.meta?.barrierId || StringConstants.NotAvailable,
  battery: device.lastData.content.battery || StringConstants.NotAvailable,
  lat: device.lastData.content.lat || StringConstants.NotAvailable,
  lng: device.lastData.content.lng || StringConstants.NotAvailable,
});

interface IDeviceDataTable {
  openModal: (e: string) => void;
}

const DeviceDataTable = ({ openModal }: IDeviceDataTable) => {
  const { data, error, isLoading } = useQuery("devices", fetchData);
  const [deviceData, setDeviceData] = useRecoilState(deviceDataState);
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoading, setShowLoading] = useState(true);

  const gridRows = deviceData.map(mapDeviceDataToGridRow);

  const getContainerClassName = () => {
    if (isLoading || showLoading) {
      return "center-container";
    } else {
      return "";
    }
  };

  const fakeDataLoading = (loadingDuration: number) => {
    setTimeout(() => setShowLoading(false), loadingDuration);
  };

  useEffect(() => {
    if (data) {
      setDeviceData(data);
      fakeDataLoading(2000);
    }
  }, [data, setDeviceData]);

  if (isLoading || showLoading) {
    return (
      <div className={getContainerClassName()}>
        <LoaderComponent />
      </div>
    );
  }

  //Add toastr to handle the errors
  if (error) {
    return <div>Error</div>;
  }

  const columns = deviceTableColumns(openModal);

  return (
    <>
      <Grid className="table-wrapper" sx={rowStyles}>
        <DataGridPro
          columns={columns}
          rows={gridRows}
          getRowId={(row) => row.id}
          autoHeight
          sx={{ fontSize: "18px", padding: "10px" }}
          initialState={{ pinnedColumns: { right: ["actions"] } }}
          onSortModelChange={() => {
            setCurrentPage(0);
          }}
          pagination
          page={currentPage}
          onPageChange={(newPage) => setCurrentPage(newPage)}
        />
      </Grid>
    </>
  );
};

export default DeviceDataTable;
