import axios, { AxiosInstance } from 'axios';

class Inpost {
  private client: AxiosInstance;

  constructor (apiToken: string, isProduction: boolean) {
    this.client = axios.create({
      baseURL: isProduction
        ? 'https://sandbox-api-shipx-pl.easypack24.net/v1'
        : 'https://sandbox-api-shipx-pl.easypack24.net/v1',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
    });
  }

  getOrganisation = (organisationId: number) => {
    return this.client.get(`organizations/${organisationId}`);
  }
}

export default Inpost;
