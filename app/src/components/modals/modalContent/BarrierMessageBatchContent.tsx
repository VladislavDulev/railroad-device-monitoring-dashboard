import IDeviceBarrierMessageBatch from "../../../constants/interfaces/IDeviceBarrierMessageBatch";
import ShowMoreButton from "./buttons/ShowMoreButton";

interface IBarrierMessageBatchContent {
  messageContent: IDeviceBarrierMessageBatch;
}

const BarrierMessageBatchContent = ({
  messageContent,
}: IBarrierMessageBatchContent) => {
  const renderMessageBatchContent = (message: any, index: number) => (
    <div key={index}>
      <p>Type: {message.type}</p>
      <p>UTC Time: {message.utcTime}</p>
    </div>
  );

  return (
    <ShowMoreButton
      items={messageContent?.messages}
      maxItems={2}
      renderText={renderMessageBatchContent}
    />
  );
};

export default BarrierMessageBatchContent;
