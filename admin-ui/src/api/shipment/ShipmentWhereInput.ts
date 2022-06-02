import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
};
