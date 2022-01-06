import './utils/loadenv';
import app from './app';
import { appPort } from './config';

app.listen(appPort, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️ Magic is happening at http://localhost:${appPort}`);
});
