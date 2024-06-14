export interface ActiveInputDef{
    Id: number;
    ProcessOrderNbr: string;
    MaterialNbr: string;
    BatchNbr: string;
    HandingUnitNbr: string;
    InputDate: string;
    WorkCenter: string;
    QuantityUom: string;
    MaterialMarge: string;
    StorageBin: string;
    ActiveInput: boolean;
    SeqNbr: number;
    IsSignificantInput: boolean;
    BatchManufacturingDate: number;
    BatchExpirationDate: number;
    BatchExpOutputMaterial: number;
}