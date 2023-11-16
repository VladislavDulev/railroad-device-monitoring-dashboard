import ReactSwitch from "react-switch";
import { useRecoilValue } from "recoil";
import { isDarkModeSelector } from "../../state/recoil";
import { useThemeToggle } from "../../hooks/useThemeToggle";

const SwitchButton = () => {
  const isDarkMode = useRecoilValue(isDarkModeSelector);
  const { toggleThemeMode } = useThemeToggle();

  return (
    <ReactSwitch checked={isDarkMode} onChange={toggleThemeMode}></ReactSwitch>
  );
};

export default SwitchButton;
