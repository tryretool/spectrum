// @flow
// The constants for the GraphQL client on the web
import { RELATIVE_ROOT } from 'shared/constants';

export const IS_PROD =
  process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV;
// In production the API is at the same URL, in development it's at a different port
export const API_URI = IS_PROD
  ? `${RELATIVE_ROOT}/api`
  : `http://localhost:3001/api`;
export const WS_URI = IS_PROD
  ? `wss://${window.location.host}${RELATIVE_ROOT}/websocket`
  : 'ws://localhost:3001/websocket';
