import * as dotenv from 'dotenv';
import Inpost from './inpost/inpost';
import { createShipmentExample, getOrganisations } from './examples';

dotenv.config();

(async () => {
  try {
    const inpost = new Inpost(
      Number(process.env.ORGANISATION_ID),
      process.env.API_TOKEN,
      JSON.parse(process.env.IS_PRODUCTION)
    );

    const response = await getOrganisations(inpost);
    // const response = await createShipmentExample(inpost);

    console.log('@@@ response | ', response.data);
  } catch (error) {
    console.log('@@@ error | ', error.response?.data);
  }
})();
