import { QueryClient, QueryClientProvider } from "react-query";
import DeviceDetailsModal from "./components/modals/DeviceDetailsModal";
import { useState } from "react";
import DeviceDataTable from "./components/deviceDataTable/DeviceDataTable";
import { useRecoilValue } from "recoil";
import "./App.css";
import { themeModeSelector } from "./state/recoil";
import Header from "./components/header/Header";

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);
  const [deviceId, setDeviceId] = useState<string>("");
  const currentThemeMode = useRecoilValue(themeModeSelector);

  const onCloseHandler = () => {
    setOpen(false);
  };

  const openModal = (id: string) => {
    setDeviceId(id);
    setOpen(true);
  };

  return (
    <div className={`App ${currentThemeMode}`}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <DeviceDataTable openModal={openModal} />
        {open && (
          <DeviceDetailsModal
            open={open}
            onClose={onCloseHandler}
            deviceId={deviceId}
          ></DeviceDetailsModal>
        )}
      </QueryClientProvider>
    </div>
  );
}

export default App;
