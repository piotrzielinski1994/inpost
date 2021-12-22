export type GetShipmentsResponse = unknown;

export interface CreateShipmentProps {
  receiver: {
    name: string,
    company_name: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
  },
  custom_attributes: {
    target_point: string,
  },
  parcels: {
    template: string,
  },
  service: "inpost_locker_standard",
};
export type CreateShipmentResponse = unknown;
