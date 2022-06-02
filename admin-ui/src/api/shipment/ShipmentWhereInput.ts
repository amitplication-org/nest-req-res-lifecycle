import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShipmentWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  trackingNumber?: StringNullableFilter;
};
