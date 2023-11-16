import { atom, selector } from "recoil";
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

export const themeModeState = atom<string>({
  key: "themeModeState",
  default: "light",
});

export const themeModeSelector = selector<string>({
  key: "themeModeSelector",
  get: ({ get }) => {
    return get(themeModeState);
  },
});

export const isDarkModeSelector = selector({
  key: "isDarkModeSelector",
  get: ({ get }) => {
    const currentThemeMode = get(themeModeState);
    return currentThemeMode === "dark";
  },
});
