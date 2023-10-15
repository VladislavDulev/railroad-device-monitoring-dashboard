import { MouseEvent, ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { deviceDataState } from "../../state/recoil";
import { IDeviceData } from "../../constants/interfaces/IDeviceData";
import MetaContent from "./modalContent/MetaContent";
import BarrierMessageBatchContent from "./modalContent/BarrierMessageBatchContent";
import BarrierOpenCloseTimeBatchContent from "./modalContent/BarrierOpenCloseTimeBatchContent";
import { DevicePropEnum } from "../common/enums/DevicePropEnum";
import CloseButton from "./modalContent/buttons/ExitButton";
import CancelButton from "./modalContent/buttons/CloseButton";
import getDisplayName from "../../utils/helpers";
import "./deviceDetailsModal.css";

interface IDeviceDetailsModal {
  open: boolean;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
  deviceId: string;
}

const DeviceDetailsModal = ({
  open,
  onClose,
  deviceId,
}: IDeviceDetailsModal) => {
  const deviceData = useRecoilValue(deviceDataState);

  const findDeviceById = (id: string, deviceData: IDeviceData[]) => {
    return deviceData.find((device) => device.lastData.id === id);
  };

  const renderValue = (value: any) => {
    if (typeof value === "number") {
      return value.toString();
    } else if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    return value;
  };

  const currentDevice = findDeviceById(deviceId, deviceData);

  if (!currentDevice) {
    return (
      <div>
        Device not found for ID: {deviceId}
        <CancelButton onClose={onClose} />
      </div>
    );
  }

  const barrierMessageBatch =
    currentDevice.lastData.content.barrierMessageBatch;
  const barrierOpenCloseTimeBatch =
    currentDevice.lastData.content.barrierOpenCloseTimeBatch;
  const meta = currentDevice.lastData.content.meta;

  const modalContent = Object.keys(currentDevice.lastData.content).map(
    (key) => (
      <div key={key}>
        <h3 className="text-lg font-black text-gray-800">
          {getDisplayName(key)}
        </h3>
        <p className="text-sm text-gray-500">
          {key === DevicePropEnum.BARRIER_MESSAGE_BATCH &&
          barrierMessageBatch ? (
            <BarrierMessageBatchContent messageContent={barrierMessageBatch} />
          ) : key === DevicePropEnum.BARRIER_OPEN_CLOSE_TIME_BATCH &&
            barrierOpenCloseTimeBatch ? (
            <BarrierOpenCloseTimeBatchContent
              barrierTimeBatch={barrierOpenCloseTimeBatch}
            />
          ) : key === DevicePropEnum.META && meta ? (
            <MetaContent metaContent={meta} />
          ) : (
            renderValue(currentDevice.lastData.content[key])
          )}
        </p>
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
        className={`bg-white rounded-xl shadow p-6 transition-all overflow-y-auto no-scrollbar modal-content ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <CloseButton onClose={onClose} />

        <div className="mt-4">{modalContent}</div>
        <CancelButton onClose={onClose} />
      </div>
    </div>
  );
};
export default DeviceDetailsModal;
