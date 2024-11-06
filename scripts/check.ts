import subscription from '../src/subscription';
import { checkSubscription } from '@gkd-kit/tools';
<<<<<<< HEAD

checkSubscription(subscription);

=======
import { checkDeprecatedGroupKeys } from '../src/appDeprecatedKeys';

checkSubscription(subscription);

checkDeprecatedGroupKeys(subscription.apps!);

>>>>>>> bfe3f98795eadca621be6cb0d2359e624d0623d7
export default subscription;
