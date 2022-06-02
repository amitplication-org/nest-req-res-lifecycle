import { Customer } from "../customer/Customer";
import { Shipment } from "../shipment/Shipment";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  shipments?: Array<Shipment>;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
