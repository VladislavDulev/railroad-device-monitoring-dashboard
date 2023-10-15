import IDeviceBarrierMessageBatch from "../../../constants/interfaces/IDeviceBarrierMessageBatch";

interface IBarrierMessageBatchContent {
  messageContent: IDeviceBarrierMessageBatch;
}

const BarrierMessageBatchContent = ({
  messageContent,
}: IBarrierMessageBatchContent) => {
  return (
    <div>
      {messageContent?.messages?.map((message, index) => (
        <div key={index}>
          <p>Type: {message.type}</p>
          <p>UTC Time: {message.utcTime}</p>
        </div>
      ))}
    </div>
  );
};

export default BarrierMessageBatchContent;
