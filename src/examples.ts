import Inpost from "./inpost/inpost";
import { CreateShipmentProps } from "./inpost/shipments/shipments.interfaces";

export const getOrganisations = (inpost: Inpost) => {
  return inpost.getOrganisation();
}

export const createShipmentExample = (inpost: Inpost) => {
  const createShipmentProps: CreateShipmentProps = {
    receiver: {
      name: "Name",
      company_name: "Company name",
      first_name: "Jan",
      last_name: "Kowalski",
      email: "test@inpost.pl",
      phone: "111222333"
    },
    custom_attributes: {
      target_point: "KRA010"
     },
    parcels: {
      template: "small"
    },
    service: "inpost_locker_standard",
  };

  return inpost.shipments.create(createShipmentProps);
}
