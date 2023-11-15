import { atom } from "recoil";
import { IDeviceData } from "../constants/interfaces/IDeviceData";

export const deviceDataState = atom({
  key: "deviceDataState",
  default: [] as IDeviceData[],
});

export const filteredDeviceDataState = atom({
  key: "filteredDeviceDataState",
  default: [] as IDeviceData[],
});

export const loadingState = atom({
  key: "loadingState",
  default: true,
});
