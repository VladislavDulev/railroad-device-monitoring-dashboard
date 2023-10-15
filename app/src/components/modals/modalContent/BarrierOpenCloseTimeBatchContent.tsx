import IDeviceBarrierOpenCloseTimeBatch from "../../../constants/interfaces/IDeviceBarrierOpenCloseTimeBatch";

interface IBarrierOpenCloseTimeBatchContent {
  barrierTimeBatch: IDeviceBarrierOpenCloseTimeBatch;
}

const BarrierOpenCloseTimeBatchContent = ({
  barrierTimeBatch,
}: IBarrierOpenCloseTimeBatchContent) => {
  return (
    <div>
      {barrierTimeBatch.proRailBarrierOpenCloseTime.map(
        (entry: any, index: any) => (
          <div key={index}>
            <p>Opening Time: {entry.openingTime}</p>
            <p>Closing Time: {entry.closingTime}</p>
          </div>
        )
      )}
    </div>
  );
};

export default BarrierOpenCloseTimeBatchContent;
