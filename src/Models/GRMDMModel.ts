export interface GRMDMDef{
    Id: number;
    WorkCenterType: string;
    WorkCenterCode: string;
    MaterialNbr: string;
    TagName: string;
    ConversionFactorNominator: number;
    ConversionFactorDenominator: number;
    GroupingNominator: number;
    GroupingDenominator: number;
    IsConverted: boolean;
    IsGrouped: boolean;
    IsBackFlush: boolean;
    RoundingType: number;
    IsDirectToMes: boolean;
    PLC_Trigger: number;
    OutputType: string;
}