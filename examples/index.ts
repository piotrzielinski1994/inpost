import * as dotenv from 'dotenv';
import Inpost from '../src/inpost';
import Examples from './examples';

dotenv.config();

(async () => {
  try {
    const inpost = new Inpost(
      Number(process.env.ORGANISATION_ID),
      String(process.env.API_TOKEN),
      false
    );
    const examples = new Examples(inpost);

    const response = await examples.getOrganisation();

    console.log('@@@ response | ', response.data);
  } catch (error: any) {
    console.log('@@@ error | ', error.response?.data);
  }
})();
