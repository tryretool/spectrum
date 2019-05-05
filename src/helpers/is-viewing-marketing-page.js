// @flow
import { RELATIVE_ROOT } from 'shared/constants';

export const isViewingMarketingPage = (
  history: Object,
  currentUser: ?Object
) => {
  const viewing = history.location.pathname;
  const isRoot = viewing === `${RELATIVE_ROOT || '/'}`;

  if (isRoot && (!currentUser || !currentUser.id)) return true;

  return (
    viewing === `${RELATIVE_ROOT}/home` ||
    viewing === `${RELATIVE_ROOT}/about` ||
    viewing === `${RELATIVE_ROOT}/code-of-conduct` ||
    viewing === `${RELATIVE_ROOT}/contact` ||
    viewing === `${RELATIVE_ROOT}/privacy` ||
    viewing === `${RELATIVE_ROOT}/privacy.html` ||
    viewing === `${RELATIVE_ROOT}/support` ||
    viewing === `${RELATIVE_ROOT}/terms` ||
    viewing === `${RELATIVE_ROOT}/terms.html` ||
    viewing === `${RELATIVE_ROOT}/faq` ||
    viewing === `${RELATIVE_ROOT}/features` ||
    viewing === `${RELATIVE_ROOT}/app`
  );
};
