import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";
import { Shipment } from "../shipment/Shipment";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  shipments?: Shipment | null;
  totalPrice: number | null;
  updatedAt: Date;
};
