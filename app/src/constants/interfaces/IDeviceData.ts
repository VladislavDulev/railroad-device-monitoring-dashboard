import IDeviceBarrierMessageBatch from "./IDeviceBarrierMessageBatch";
import IDeviceBarrierOpenCloseTimeBatch from "./IDeviceBarrierOpenCloseTimeBatch";
import IDeviceMeta from "./IDeviceMeta";

export interface IDeviceData {
  lastData: {
    content: {
      [key: string]: string | number | boolean | object | undefined;
      messageType?: string;
      battery?: number;
      profile?: number;
      cmdAck?: number;
      gpsFixAge?: number;
      satInFix?: number;
      lat?: number;
      lng?: number;
      batteryLifeCount?: number;
      batteryLife?: number;
      fCntUp?: number;
      barrierMessageBatch?: IDeviceBarrierMessageBatch;
      meta?: IDeviceMeta;
      downlinkPayload?: string;
      barrierOpenCloseTimeBatch?: IDeviceBarrierOpenCloseTimeBatch;
      rebootReason?: number;
      m1M2ID?: number;
      srcID?: number;
      lineNR?: number;
      version?: number;
      loLoTemp?: boolean;
      loTemp?: boolean;
      hiTemp?: boolean;
      hiHiTemp?: boolean;
      loLoExtTemp?: boolean;
      loExtTemp?: boolean;
      hiExtTemp?: boolean;
      hiHiExtTemp?: boolean;
      baromBar?: number;
      intTemp?: number;
      intHum?: number;
      extTemp?: number;
      extHum?: number;
      vBat?: number;
    };
    id?: string;
    timeReceived?: string;
    timeSet?: "string";
  };
  query: {
    endTime?: string;
    period?: string;
    startTime?: string;
    id: {
      value: string;
    };
  };
}
