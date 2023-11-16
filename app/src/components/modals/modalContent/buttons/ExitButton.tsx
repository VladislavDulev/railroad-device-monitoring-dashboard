import { MouseEvent } from "react";
import { X } from "react-feather";
import { useRecoilValue } from "recoil";
import { themeModeSelector } from "../../../../state/recoil";
import { getColorStyles } from "../../../../utils/helpers";

interface IExitButton {
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ExitButton = ({ onClose }: IExitButton) => {
  const currentThemeMode = useRecoilValue(themeModeSelector);

  const lightModeColors = {
    button:
      "absolute top-2 right-2 p-5 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600",
  };

  const darkModeColors = {
    button:
      "absolute top-2 right-2 p-5 rounded-lg text-gray-600 bg-black hover:bg-gray-900 hover:text-white transition-colors duration-200 ease-in-out",
  };

  const colors = getColorStyles(
    currentThemeMode,
    lightModeColors,
    darkModeColors
  );

  return (
    <button onClick={onClose} className={colors.button}>
      <X />
    </button>
  );
};

export default ExitButton;
