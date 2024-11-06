import { updateDist } from '@gkd-kit/tools';
<<<<<<< HEAD
import subscription from './check';

await updateDist(subscription);
=======
import { updateReadMeMd } from './updateReadMeMd';
import subscription from './check';

await updateDist(subscription);

await updateReadMeMd();
>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
