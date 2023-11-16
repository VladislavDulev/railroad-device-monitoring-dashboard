import { getFontColor } from "./utils/helpers";

const getRowStyles = (currentThemeMode: string, isDarkMode: boolean) => {
  return {
    "& .barrierId-cells-theme": {
      backgroundColor: isDarkMode
        ? "rgba(30, 60, 90, 0.8)"
        : "rgba(59, 130, 246, 0.1)",
      border: "1px solid #E0E0E0",
      height: "60px",
      fontFamily: "Ubuntu",
      color: getFontColor(currentThemeMode),
    },

    "& .fCntUp-cells-theme": {
      backgroundColor: isDarkMode
        ? "rgb(28, 29, 36)"
        : "rgba(255, 255, 255, 1)",
      border: "1px solid #E0E0E0",
      height: "60px",
      fontFamily: "Ubuntu",
      color: getFontColor(currentThemeMode),
    },

    "& .battery-cells-theme": {
      border: "1px solid #E0E0E0",
      fontFamily: "Ubuntu",
      color: getFontColor(currentThemeMode),
    },

    "& .latitude-cells-theme": {
      backgroundColor: isDarkMode
        ? "rgb(28, 29, 36)"
        : "rgba(255, 255, 255, 1)",
      border: "1px solid #E0E0E0",
      fontFamily: "Ubuntu",
      color: getFontColor(currentThemeMode),
    },

    "& .longitude-cells-theme": {
      backgroundColor: isDarkMode
        ? "rgba(30, 60, 90, 0.8)"
        : "rgba(59, 130, 246, 0.1)",
      border: "1px solid #E0E0E0",
      fontFamily: "Ubuntu",
      color: getFontColor(currentThemeMode),
    },
  };
};

export default getRowStyles;
