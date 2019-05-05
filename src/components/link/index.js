import React from 'react';
import { Link } from 'react-router-dom';
import { RELATIVE_ROOT } from 'shared/constants';

const getNewPathname = pathname => `${RELATIVE_ROOT}${pathname}`;

export default props => {
  let newTo;
  if (typeof props.to === 'string') {
    newTo = getNewPathname(props.to);
  } else if (typeof props.to === 'object' && props.to.pathname) {
    newTo = {
      ...props.to,
      pathname: getNewPathname(props.to.pathname),
    };
  } else {
    newTo = props.to;
  }
  return <Link {...props} to={newTo} />;
};
