import { useRecoilValue } from "recoil";
import SearchInput from "../searchBar/SearchBar";
import SwitchButton from "../switchButton/SwitchButton";
import "./header.css";
import { loadingState } from "../../state/recoil";

const Header = () => {
  const isLoadingData = useRecoilValue(loadingState);

  if (isLoadingData) {
    return null;
  }

  return (
    <div className="header-container">
      <SearchInput />
      <SwitchButton />
    </div>
  );
};

export default Header;
