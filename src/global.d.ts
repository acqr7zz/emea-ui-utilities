import { ShowPODataInputsDef } from './Models/PODataModel';

declare global {
  interface Window {
    POData: ShowPODataInputsDef;
  }
}