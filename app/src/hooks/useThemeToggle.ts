import { useRecoilState, useRecoilCallback } from "recoil";
import { themeModeState } from "../state/recoil";
import { ThemeModeEnum } from "../components/common/enums/ThemeModeEnum";

export const useThemeToggle = () => {
  const { LIGHT_MODE, DARK_MODE } = ThemeModeEnum;
  const [, setThemeMode] = useRecoilState(themeModeState);

  const toggleThemeMode = useRecoilCallback(() => () => {
    setThemeMode((prevMode) =>
      prevMode === DARK_MODE ? LIGHT_MODE : DARK_MODE
    );
  });

  return {
    toggleThemeMode,
  };
};
