import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentCreateInput = {
  address?: AddressWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
};
