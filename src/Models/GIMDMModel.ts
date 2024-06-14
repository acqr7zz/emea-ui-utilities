export interface GIMDMDef{
    Id: number;
    Area: string;
    WorkCenterCode: string;
    OutputMaterialNbr: string;
    InputMaterialNbr: string;
    TagName: string;
    ConversionFactorNominator: number;
    ConversionFactorDenominator: number;
    RoundingType: number;
    IsDirectToMes: boolean;
    IsBackflush: boolean;
    InputMaterialDesc: string;
    ConsumptionStrategy: string;
    TriggerTimeToMES: number;
    PLC_trigger: number;
    FullHU: boolean;
    GIOverConsumptionStrategy: number;
    ScrapNominator: number;
    ScrapDenominator: number;
}