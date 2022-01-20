import { AxiosInstance } from 'axios';
import {
  CreateShipmentBody,
  CreateShipmentResponse,
  GetShipmentsResponse,
} from './shipments.interfaces';

class Shipments {
  constructor(private client: AxiosInstance, private organisationId: number) {}

  get = () => {
    return this.client.get<GetShipmentsResponse>(
      `organizations/${this.organisationId}/shipments`
    );
  };

  create = (data: CreateShipmentBody) => {
    return this.client.post<CreateShipmentResponse>(
      `organizations/${this.organisationId}/shipments`,
      data
    );
  };
}

export default Shipments;
