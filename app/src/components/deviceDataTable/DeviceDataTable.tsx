import { useRecoilState, useRecoilValue } from "recoil";
import { IDeviceData } from "../../constants/interfaces/IDeviceData";
import fetchData from "../../utils/apiUtils";
import { useQuery } from "react-query";
import {
  deviceDataState,
  filteredDeviceDataState,
  isDarkModeSelector,
  loadingState,
  themeModeSelector,
} from "../../state/recoil";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { Grid } from "@mui/material";
import { deviceTableColumns } from "./deviceTableColumns";
import "./deviceDataTable.css";
import rowStyles from "../../styles";
import { useEffect, useState } from "react";
import { StringConstants } from "../../constants/types/StringConstants";
import LoaderComponent from "../loader/Loader";
import { getLoadingContainerClassName } from "../../utils/helpers";

const mapDeviceDataToGridRow = (device: IDeviceData) => ({
  id: device.query.id.value || StringConstants.NOT_AVAILABLE,
  fCntUp: device.lastData.content.fCntUp || StringConstants.NOT_AVAILABLE,
  barrierId:
    device.lastData.content.meta?.barrierId || StringConstants.NOT_AVAILABLE,
  battery: device.lastData.content.battery || StringConstants.NOT_AVAILABLE,
  lat: device.lastData.content.lat || StringConstants.NOT_AVAILABLE,
  lng: device.lastData.content.lng || StringConstants.NOT_AVAILABLE,
});

interface IDeviceDataTable {
  openModal: (e: string) => void;
}

const DeviceDataTable = ({ openModal }: IDeviceDataTable) => {
  const { data, error } = useQuery("devices", fetchData);

  const [devicesData, setDevicesData] = useRecoilState(deviceDataState);
  const [, setLoadingState] = useRecoilState(loadingState);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredDeviceData = useRecoilValue(filteredDeviceDataState);
  const currentThemeMode = useRecoilValue(themeModeSelector);
  const isLoadingData = useRecoilValue(loadingState);
  const isDarkMode = useRecoilValue(isDarkModeSelector);

  const gridRows =
    filteredDeviceData.length < devicesData.length
      ? filteredDeviceData.map(mapDeviceDataToGridRow)
      : devicesData.map(mapDeviceDataToGridRow);

  const fakeDataLoading = (loadingDuration: number) => {
    setTimeout(() => {
      setLoadingState(false);
    }, loadingDuration);
  };

  useEffect(() => {
    if (data) {
      setDevicesData(data);
      fakeDataLoading(2000);
    }
  }, [data, setDevicesData]);

  if (isLoadingData) {
    return (
      <div className={getLoadingContainerClassName(isLoadingData)}>
        <LoaderComponent />
      </div>
    );
  }

  //Add toasts to handle the errors
  if (error) {
    return <div>Error</div>;
  }

  const columns = deviceTableColumns(openModal, currentThemeMode, isDarkMode);

  return (
    <>
      <Grid
        className="table-wrapper"
        sx={rowStyles(currentThemeMode, isDarkMode)}
      >
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
