import Inpost from '../src/inpost';
import { CreateShipmentBody } from '../src/shipments/shipments.interfaces';

class Examples {
  constructor(private inpost: Inpost) {}

  getOrganisation = () => {
    return this.inpost.getOrganisation();
  };

  createShipmentExample = () => {
    const createShipmentProps: CreateShipmentBody = {
      receiver: {
        name: 'Name',
        company_name: 'Company name',
        first_name: 'Jan',
        last_name: 'Kowalski',
        email: 'test@inpost.pl',
        phone: '111222333',
      },
      custom_attributes: {
        target_point: 'KRA010',
      },
      parcels: {
        template: 'small',
      },
      service: 'inpost_locker_standard',
    };

    return this.inpost.shipments.create(createShipmentProps);
  };
}

export default Examples;
