import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  order?: OrderWhereUniqueInput;
  trackingNumber?: string | null;
};
