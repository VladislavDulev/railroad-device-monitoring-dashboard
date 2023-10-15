import { atom } from "recoil";
import { IDeviceData } from "../constants/interfaces/IDeviceData";

export const deviceDataState = atom({
  key: "deviceDataState",
  default: [] as IDeviceData[],
});
