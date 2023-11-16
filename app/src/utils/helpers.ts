import { DeviceDataPropertyEnum } from "../components/common/enums/DeviceDataPropertyEnum";
import { ThemeModeEnum } from "../components/common/enums/ThemeModeEnum";

const getDisplayName = (key: string): string => {
  switch (key) {
    case DeviceDataPropertyEnum.MESSAGE_TYPE:
      return "Message Type";
    case DeviceDataPropertyEnum.BATTERY:
      return "Battery Level";
    case DeviceDataPropertyEnum.PROFILE:
      return "Profile Version";
    case DeviceDataPropertyEnum.CMD_ACK:
      return "Command Acknowledgment";
    case DeviceDataPropertyEnum.GPS_FIX_AGE:
      return "GPS Fix Age";
    case DeviceDataPropertyEnum.SAT_IN_FIX:
      return "Satellites in Fix";
    case DeviceDataPropertyEnum.LAT:
      return "Latitude";
    case DeviceDataPropertyEnum.LNG:
      return "Longitude";
    case DeviceDataPropertyEnum.BATTERY_LIFE_COUNT:
      return "Battery Life Count";
    case DeviceDataPropertyEnum.BATTERY_LIFE:
      return "Battery Life Percentage";
    case DeviceDataPropertyEnum.FCNT_UP:
      return "Uplink Frame Counter";
    case DeviceDataPropertyEnum.BARRIER_MESSAGE_BATCH:
      return "Barrier Message Batch";
    case DeviceDataPropertyEnum.META:
      return "Device Metadata";
    case DeviceDataPropertyEnum.DOWNLINK_PAYLOAD:
      return "Downlink Payload Data";
    case DeviceDataPropertyEnum.BARRIER_OPEN_CLOSE_TIME_BATCH:
      return "Barrier Open/Close Time Batch";
    case DeviceDataPropertyEnum.REBOOT_REASON:
      return "Reboot Reason Code";
    case DeviceDataPropertyEnum.M1_M2_ID:
      return "M1M2 ID";
    case DeviceDataPropertyEnum.SRC_ID:
      return "Source ID";
    case DeviceDataPropertyEnum.LINE_NR:
      return "Line Number";
    case DeviceDataPropertyEnum.VERSION:
      return "Firmware Version";
    case DeviceDataPropertyEnum.LO_LO_TEMP:
      return "Low-Low Temperature Alert";
    case DeviceDataPropertyEnum.LO_TEMP:
      return "Low Temperature Alert";
    case DeviceDataPropertyEnum.HI_TEMP:
      return "High Temperature Alert";
    case DeviceDataPropertyEnum.HI_HI_TEMP:
      return "High-High Temperature Alert";
    case DeviceDataPropertyEnum.LO_LO_EXT_TEMP:
      return "Low-Low External Temperature Alert";
    case DeviceDataPropertyEnum.LO_EXT_TEMP:
      return "Low External Temperature Alert";
    case DeviceDataPropertyEnum.HI_EXT_TEMP:
      return "High External Temperature Alert";
    case DeviceDataPropertyEnum.HI_HI_EXT_TEMP:
      return "High-High External Temperature Alert";
    case DeviceDataPropertyEnum.BAROM_BAR:
      return "Barometric Pressure";
    case DeviceDataPropertyEnum.INT_TEMP:
      return "Internal Temperature";
    case DeviceDataPropertyEnum.INT_HUM:
      return "Internal Humidity";
    case DeviceDataPropertyEnum.EXT_TEMP:
      return "External Temperature";
    case DeviceDataPropertyEnum.EXT_HUM:
      return "External Humidity";
    case DeviceDataPropertyEnum.V_BAT:
      return "Battery Voltage";
    case DeviceDataPropertyEnum.ID:
      return "ID";
    case DeviceDataPropertyEnum.TIME_RECEIVED:
      return "Time Received";
    case DeviceDataPropertyEnum.TIME_SET:
      return "Time Set";
    case DeviceDataPropertyEnum.QUERY:
      return "Query";
    case DeviceDataPropertyEnum.END_TIME:
      return "End Time";
    case DeviceDataPropertyEnum.PERIOD:
      return "Period";
    case DeviceDataPropertyEnum.START_TIME:
      return "Start Time";
    case DeviceDataPropertyEnum.VALUE:
      return "Value";
    default:
      return key;
  }
};

export default getDisplayName;

export const getLoadingContainerClassName = (isLoading: boolean) => {
  if (isLoading) {
    return "center-container";
  } else {
    return "";
  }
};

export const getColorStyles = (
  currentThemeMode: string,
  lightMode: any,
  darkMode: any
) => {
  const { DARK_MODE } = ThemeModeEnum;
  return currentThemeMode === DARK_MODE ? darkMode : lightMode;
};

export const getFontColor = (currentThemeMode: string) => {
  const lightModeFont = "rgba(0, 0, 0, 0.87)";
  const darkModeFont = "rgba(255, 255, 255, 0.87)";

  const fontColor = getColorStyles(
    currentThemeMode,
    lightModeFont,
    darkModeFont
  );

  return fontColor;
};
