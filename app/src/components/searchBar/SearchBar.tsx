import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  deviceDataState,
  filteredDeviceDataState,
  loadingState,
} from "../../state/recoil";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { getLoadingContainerClassName } from "../../utils/helpers";
import LoaderComponent from "../loader/Loader";

const SearchInput = () => {
  const deviceData = useRecoilValue(deviceDataState);
  const isLoadingData = useRecoilValue(loadingState);

  const [, setFilteredDeviceData] = useRecoilState(filteredDeviceDataState);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const result = deviceData.filter((device) => {
      const propertiesToCheck = [
        device.query.id.value,
        device.lastData.content.battery,
        device.lastData.content.fCntUp,
        device.lastData.content.lat,
        device.lastData.content.lng,
      ];

      return propertiesToCheck.some(
        (property) =>
          property !== undefined && property.toString().includes(searchTerm)
      );
    });

    setFilteredDeviceData(result);
  };

  useEffect(() => {
    handleSearch();
  }, [deviceData, searchTerm]);

  if (isLoadingData) {
    return (
      <div className={getLoadingContainerClassName(isLoadingData)}>
        <LoaderComponent />
      </div>
    );
  }

  return (
    <div className="search-field">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon className="search-icon" />
      </div>
    </div>
  );
};

export default SearchInput;
