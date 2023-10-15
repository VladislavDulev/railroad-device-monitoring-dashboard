import { DeviceDataProperty } from "../components/common/enums/DeviceDataProperty";

const getDisplayName = (key: string): string => {
  switch (key) {
    case DeviceDataProperty.MESSAGE_TYPE:
      return "Message Type";
    case DeviceDataProperty.BATTERY:
      return "Battery Level";
    case DeviceDataProperty.PROFILE:
      return "Profile Version";
    case DeviceDataProperty.CMD_ACK:
      return "Command Acknowledgment";
    case DeviceDataProperty.GPS_FIX_AGE:
      return "GPS Fix Age";
    case DeviceDataProperty.SAT_IN_FIX:
      return "Satellites in Fix";
    case DeviceDataProperty.LAT:
      return "Latitude";
    case DeviceDataProperty.LNG:
      return "Longitude";
    case DeviceDataProperty.BATTERY_LIFE_COUNT:
      return "Battery Life Count";
    case DeviceDataProperty.BATTERY_LIFE:
      return "Battery Life Percentage";
    case DeviceDataProperty.FCNT_UP:
      return "Uplink Frame Counter";
    case DeviceDataProperty.BARRIER_MESSAGE_BATCH:
      return "Barrier Message Batch";
    case DeviceDataProperty.META:
      return "Device Metadata";
    case DeviceDataProperty.DOWNLINK_PAYLOAD:
      return "Downlink Payload Data";
    case DeviceDataProperty.BARRIER_OPEN_CLOSE_TIME_BATCH:
      return "Barrier Open/Close Time Batch";
    case DeviceDataProperty.REBOOT_REASON:
      return "Reboot Reason Code";
    case DeviceDataProperty.M1_M2_ID:
      return "M1M2 ID";
    case DeviceDataProperty.SRC_ID:
      return "Source ID";
    case DeviceDataProperty.LINE_NR:
      return "Line Number";
    case DeviceDataProperty.VERSION:
      return "Firmware Version";
    case DeviceDataProperty.LO_LO_TEMP:
      return "Low-Low Temperature Alert";
    case DeviceDataProperty.LO_TEMP:
      return "Low Temperature Alert";
    case DeviceDataProperty.HI_TEMP:
      return "High Temperature Alert";
    case DeviceDataProperty.HI_HI_TEMP:
      return "High-High Temperature Alert";
    case DeviceDataProperty.LO_LO_EXT_TEMP:
      return "Low-Low External Temperature Alert";
    case DeviceDataProperty.LO_EXT_TEMP:
      return "Low External Temperature Alert";
    case DeviceDataProperty.HI_EXT_TEMP:
      return "High External Temperature Alert";
    case DeviceDataProperty.HI_HI_EXT_TEMP:
      return "High-High External Temperature Alert";
    case DeviceDataProperty.BAROM_BAR:
      return "Barometric Pressure";
    case DeviceDataProperty.INT_TEMP:
      return "Internal Temperature";
    case DeviceDataProperty.INT_HUM:
      return "Internal Humidity";
    case DeviceDataProperty.EXT_TEMP:
      return "External Temperature";
    case DeviceDataProperty.EXT_HUM:
      return "External Humidity";
    case DeviceDataProperty.V_BAT:
      return "Battery Voltage";
    case DeviceDataProperty.ID:
      return "ID";
    case DeviceDataProperty.TIME_RECEIVED:
      return "Time Received";
    case DeviceDataProperty.TIME_SET:
      return "Time Set";
    case DeviceDataProperty.QUERY:
      return "Query";
    case DeviceDataProperty.END_TIME:
      return "End Time";
    case DeviceDataProperty.PERIOD:
      return "Period";
    case DeviceDataProperty.START_TIME:
      return "Start Time";
    case DeviceDataProperty.VALUE:
      return "Value";
    default:
      return key;
  }
};

export default getDisplayName;
