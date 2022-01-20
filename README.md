# Inpost API client for javascript

## Usage

See: https://github.com/piotrzielinski1994/inpost/blob/main/examples/index.ts

```ts
import Inpost from 'inpost';

const config = {
  organisationId: 1234,
  apiToken: '<token>',
  isProduction: false,
};

(async () => {
  try {
    const inpost = new Inpost(
      config.organisationId,
      config.apiToken,
      config.isProduction
    );

    const organisationData = await inpost.getOrganisation();
  } catch (error) {}
})();
```
