import IDeviceBarrierOpenCloseTimeBatch from "../../../constants/interfaces/IDeviceBarrierOpenCloseTimeBatch";
import ShowMoreButton from "./buttons/ShowMoreButton";

interface IBarrierOpenCloseTimeBatchContent {
  barrierTimeBatch: IDeviceBarrierOpenCloseTimeBatch;
}

const BarrierOpenCloseTimeBatchContent = ({
  barrierTimeBatch,
}: IBarrierOpenCloseTimeBatchContent) => {
  const renderOpeningClosingBatchContent = (entry: any, index: number) => (
    <div key={index}>
      <p>Opening Time: {entry.openingTime}</p>
      <p>Closing Time: {entry.closingTime}</p>
    </div>
  );

  return (
    <ShowMoreButton
      items={barrierTimeBatch.proRailBarrierOpenCloseTime}
      maxItems={2}
      renderText={renderOpeningClosingBatchContent}
    />
  );
};

export default BarrierOpenCloseTimeBatchContent;
