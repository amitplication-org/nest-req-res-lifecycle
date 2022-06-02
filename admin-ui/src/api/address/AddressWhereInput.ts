import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  shipments?: ShipmentListRelationFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
