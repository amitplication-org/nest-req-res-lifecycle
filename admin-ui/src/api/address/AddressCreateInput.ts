import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";
import { ShipmentCreateNestedManyWithoutAddressesInput } from "./ShipmentCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  shipments?: ShipmentCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
