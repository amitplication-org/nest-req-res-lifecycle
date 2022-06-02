import { Shipment as TShipment } from "../api/shipment/Shipment";

export const SHIPMENT_TITLE_FIELD = "id";

export const ShipmentTitle = (record: TShipment): string => {
  return record.id || record.id;
};
