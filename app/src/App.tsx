import { QueryClient, QueryClientProvider } from "react-query";
import DeviceDetailsModal from "./components/modals/DeviceDetailsModal";
import { useState } from "react";
import DeviceDataTable from "./components/deviceTable/DeviceDataTable";

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);
  const [deviceId, setDeviceId] = useState<string>("");

  const onCloseHandler = () => {
    setOpen(false);
  };

  const openModal = (id: string) => {
    setDeviceId(id);
    setOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <DeviceDataTable openModal={openModal} />
      {open && (
        <DeviceDetailsModal
          open={open}
          onClose={onCloseHandler}
          deviceId={deviceId}
        ></DeviceDetailsModal>
      )}
    </QueryClientProvider>
  );
}

export default App;
