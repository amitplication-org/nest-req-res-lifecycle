import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ProductTitle } from "../product/ProductTitle";
import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <NumberInput label="Discount" source="discount" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput
          source="shipment.id"
          reference="Shipment"
          label="Shipments"
        >
          <SelectInput optionText={ShipmentTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Total Price" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
