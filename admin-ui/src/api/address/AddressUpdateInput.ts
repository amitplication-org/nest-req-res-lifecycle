import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";
import { ShipmentUpdateManyWithoutAddressesInput } from "./ShipmentUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  shipments?: ShipmentUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
