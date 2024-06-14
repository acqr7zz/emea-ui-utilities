export interface Material {
    ComponentSequenceNbr: string;
    MaterialNbr: string;
    MaterialDescription: string;
    MESOutputComponentNbr: string | null;
    RequiredQuantity: number;
    RequiredQuantityUom: string;
    OperationNbr: string | null;
    IsBackflush: boolean;
    UnderDeliveryTolerance: number;
    OverDeliveryTolerance: number;
    IsUnlimitedOverDelivery: boolean;
    OutputType: string | null;
    IsCoProduct: boolean;
    ReservationItemNbr: string | null;
    MovementType: string;
    BatchNbr: string | null;
    StorageLocation: string;
    SupplyArea: string | null;
    ItemCategory: string | null;
    IsUnplannedInput: boolean;
    SerialNumbers: string[];
    VariantConfigurationDescription: string | null;
    VariantCharacteristics: any[]; // Replace 'any' with a more specific type if possible
    ECCStockType: string | null;
    IsPhantom: boolean;
  }
  
  export interface Operation {
    WorkCenterCode: string;
    OperationNbr: string;
    OperationDescription: string;
    IsPhase: boolean;
    IsActive: boolean;
    SuperordinateOperation: string | null;
    MESOperationStatus: string;
    OperationQuantity: number;
    ActualOperationQuantity: number;
    OperationQuantityUom: string;
    ProcessSpecName: string | null;
    ScheduledStartDateTime: string;
    ScheduledEndDateTime: string;
    ActualStartDateTime: string;
    ActualEndDateTime: string;
    MESSequenceNbr: string | null;
    ControlKey: string;
    PlannerOperationPhaseNotes: string;
    IsMilestonePhase: boolean;
    PredecessorPhase: any[]; // Replace 'any' with a more specific type if possible
    SAPWorkCenterCode: string;
  }
  
  export interface PODetails {
    PlantCode: string;
    ProcessOrderNbr: string;
    MaterialNbr: string;
    MaterialDescription: string;
    LegacyMaterialIdNbr: string | null;
    DefaultGRStorageLocation: string;
    OrderType: string;
    OrderPriority: string;
    ProductionVersion: string;
    ScheduledStartDateTime: string;
    ScheduledEndDateTime: string;
    ActualStartDateTime: string;
    ActualEndDateTime: string;
    TotalQuantity: number;
    TotalQuantityUom: string;
    ActualQuantity: number;
    ActualQuantityUom: string;
    IsExportControl: boolean;
    IsIPControl: boolean;
    IsActive: boolean;
    ExportControlRegulatoryMessage: string;
    PlannerPONotes: string;
    Materials: Material[];
    Operations: Operation[];
    CreatedBy: string;
    ModifiedBy: string;
    CreatedDateTime: string;
    ModifiedDateTime: string;
    SAPCreatedBy: string | null;
    SAPModifiedBy: string | null;
    SAPCreatedDateTime: string;
    SAPModifiedDateTime: string;
  }

