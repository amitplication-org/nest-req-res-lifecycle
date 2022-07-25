import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Shipment = {
  address?: Address | null;
  createdAt: Date;
  id: string;
  order?: Order | null;
  trackingNumber: string | null;
  updatedAt: Date;
};
