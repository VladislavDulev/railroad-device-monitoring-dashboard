import { useRecoilValue } from "recoil";
import {
  deviceDataState,
  isDarkModeSelector,
  themeModeSelector,
} from "../../state/recoil";
import { IDeviceData } from "../../constants/interfaces/IDeviceData";
import MetaContent from "./modalContent/MetaContent";
import BarrierMessageBatchContent from "./modalContent/BarrierMessageBatchContent";
import BarrierOpenCloseTimeBatchContent from "./modalContent/BarrierOpenCloseTimeBatchContent";
import { DevicePropEnum } from "../common/enums/DevicePropEnum";
import CloseButton from "./modalContent/buttons/ExitButton";
import CancelButton from "./modalContent/buttons/CloseButton";
import getDisplayName, { getColorStyles } from "../../utils/helpers";
import "./deviceDetailsModal.css";
import { useEffect, useRef } from "react";
import { ThemeModeEnum } from "../common/enums/ThemeModeEnum";

interface IDeviceDetailsModal {
  open: boolean;
  onClose: () => void;
  deviceId: string;
}

const DeviceDetailsModal = ({
  open,
  onClose,
  deviceId,
}: IDeviceDetailsModal) => {
  const { BARRIER_MESSAGE_BATCH, BARRIER_OPEN_CLOSE_TIME_BATCH, META } =
    DevicePropEnum;

  const devicesData = useRecoilValue(deviceDataState);
  const currentThemeMode = useRecoilValue(themeModeSelector);
  const isDarkMode = useRecoilValue(isDarkModeSelector);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const findDeviceById = (id: string, devicesData: IDeviceData[]) => {
    return devicesData.find((devicesData) => devicesData.lastData.id === id);
  };

  const currentDevice = findDeviceById(deviceId, devicesData);

  const lightModeColors = {
    header: "text-lg font-black text-gray-800",
    content: "text-sm text-gray-500",
  };

  const darkModeColors = {
    header: "text-lg font-white text-gray-300",
    content: "text-sm text-gray-700",
  };

  const colors = getColorStyles(
    currentThemeMode,
    lightModeColors,
    darkModeColors
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!currentDevice) {
    return (
      <div>
        Device not found for ID: {deviceId}
        <CancelButton onClose={onClose} />
      </div>
    );
  }

  const renderValue = (value: any) => {
    if (typeof value === "number") {
      return value.toString();
    } else if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    return value;
  };

  const barrierMessageBatch =
    currentDevice.lastData.content.barrierMessageBatch;
  const barrierOpenCloseTimeBatch =
    currentDevice.lastData.content.barrierOpenCloseTimeBatch;
  const meta = currentDevice.lastData.content.meta;

  const modalContent = Object.keys(currentDevice.lastData.content).map(
    (key) => (
      <div key={key}>
        <h3 className={colors.header}>{getDisplayName(key)}</h3>
        <div className={colors.content}>
          {key === BARRIER_MESSAGE_BATCH && barrierMessageBatch ? (
            <BarrierMessageBatchContent messageContent={barrierMessageBatch} />
          ) : key === BARRIER_OPEN_CLOSE_TIME_BATCH &&
            barrierOpenCloseTimeBatch ? (
            <BarrierOpenCloseTimeBatchContent
              barrierTimeBatch={barrierOpenCloseTimeBatch}
            />
          ) : key === META && meta ? (
            <MetaContent metaContent={meta} />
          ) : (
            renderValue(currentDevice.lastData.content[key])
          )}
        </div>
      </div>
    )
  );

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      } `}
    >
      <div
        ref={modalRef}
        className={`rounded-xl shadow p-6 transition-all overflow-y-auto no-scrollbar modal-content ${
          isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"
        } ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <CloseButton onClose={onClose} />
        <div className="mt-4">{modalContent}</div>
        <CancelButton onClose={onClose} />
      </div>
    </div>
  );
};
export default DeviceDetailsModal;
