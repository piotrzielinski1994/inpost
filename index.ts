import * as dotenv from 'dotenv';
import Inpost from './inpost';

dotenv.config();

const init = async () => {
  try {
    const inpost = new Inpost(
      process.env.API_TOKEN,
      JSON.parse(process.env.IS_PRODUCTION)
    );
    const response = await inpost.getOrganisation(process.env.ORGANISATION_ID);
    console.log('@@@ response | ', response.data);
  } catch (error) {
    console.log('@@@ error | ', error);
  }
};

init();
