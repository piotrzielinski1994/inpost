import axios, { AxiosInstance } from 'axios';
import { GetOrganisationResponse } from './inpost.interfaces';
import Shipments from './shipments/shipments';

class Inpost {
  private client: AxiosInstance;
  shipments: Shipments;

  constructor (
    private organisationId: number,
    apiToken: string,
    isProduction: boolean
  ) {
    this.client = axios.create({
      baseURL: isProduction
        ? 'https://sandbox-api-shipx-pl.easypack24.net/v1'
        : 'https://sandbox-api-shipx-pl.easypack24.net/v1',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
    });
    this.shipments = new Shipments(this.client, this.organisationId);
  }

  getOrganisation = () => {
    return this.client.get<GetOrganisationResponse>(
      `organizations/${this.organisationId}`
    );
  }
}

export default Inpost;
