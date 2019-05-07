// @flow
import compose from 'recompose/compose';
import { withRouter, type Location, type History } from 'react-router-dom';
import { RELATIVE_ROOT } from 'shared/constants';
import {
  getCurrentUser,
  type GetUserType,
} from 'shared/graphql/queries/user/getUser';

type Props = {
  data: {
    user: ?GetUserType,
  },
  location: Location,
  history: History,
};

const NoUsernameHandler = (props: Props) => {
  const { data, location, history } = props;
  const { user } = data;
  if (!user) return null;
  if (user && user.username) return null;
  const { pathname, search } = location;
  const newUserFormPathname = `${RELATIVE_ROOT}/new/user`;
  if (pathname.includes('/new/user')) return null;
  history.replace({
    pathname: newUserFormPathname,
    state: { redirect: `${pathname}${search}` },
  });
  return null;
};

export default compose(
  getCurrentUser,
  withRouter
)(NoUsernameHandler);
