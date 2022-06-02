import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
};
