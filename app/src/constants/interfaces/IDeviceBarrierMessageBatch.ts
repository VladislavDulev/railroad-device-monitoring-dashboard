interface IDeviceBarrierMessageBatch {
  messages: {
    type: string;
    utcTime: string;
  }[];
}

export default IDeviceBarrierMessageBatch;
