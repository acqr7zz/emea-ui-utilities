import { ActiveInputDef } from "./ActiveInputModel";
import { BusinessLogDef } from "./BusinessLogModel";
import { GIMDMDef } from "./GIMDMModel";
import { GRMDMDef } from "./GRMDMModel";
import { InputDef } from "./InputModel";
import { OutputDef } from "./OutputModel";
import { PODetails } from "./PODetailsModel";
import { TimeMDMDef } from "./TimeMDMModel";
import { TimeDef } from "./TimeModel";

  

export interface POData {
  PODetails: PODetails;
  Inputs: InputDef[];
  Outputs: OutputDef[];
  Time: TimeDef[];
  ActiveInputs: ActiveInputDef[];
  GIMDM: GIMDMDef[];
  GRMDM: GRMDMDef[];
  TimeMDM: TimeMDMDef[];
  BusinessLogs: BusinessLogDef[];
}
  
export interface ShowPODataInputsDef {
  POData: POData;
}