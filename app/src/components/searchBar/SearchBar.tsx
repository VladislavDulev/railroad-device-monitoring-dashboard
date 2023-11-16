import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  deviceDataState,
  filteredDeviceDataState,
  isDarkModeSelector,
  loadingState,
} from "../../state/recoil";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  const deviceData = useRecoilValue(deviceDataState);
  const isLoadingData = useRecoilValue(loadingState);
  const isDarkMode = useRecoilValue(isDarkModeSelector);

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
    return null;
  }
  //Repeated
  const themeClassName = isDarkMode ? "dark-mode" : "light-mode";

  return (
    <div className={`search-field ${themeClassName}`}>
      <div className="search-container">
        <input
          className={`input ${themeClassName}`}
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
