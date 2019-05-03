// @flow
const IS_PROD = !process.env.FORCE_DEV && process.env.NODE_ENV === 'production';

export const SEND_NEW_MESSAGE_EMAIL = 'send new message email';
export const SEND_NEW_DIRECT_MESSAGE_EMAIL = 'send new direct message email';
export const SEND_COMMUNITY_INVITE_EMAIL = 'send community invite email';
export const SEND_NEW_USER_WELCOME_EMAIL = 'send new user welcome email';
export const SEND_NEW_COMMUNITY_WELCOME_EMAIL =
  'send new community welcome email';

export const SEND_THREAD_CREATED_NOTIFICATION_EMAIL =
  'send thread created notification email';
export const SEND_DIGEST_EMAIL = 'send digest email';
export const SEND_EMAIL_VALIDATION_EMAIL = 'send email validation email';
export const SEND_ADMINISTRATOR_EMAIL_VALIDATION_EMAIL =
  'send administrator email validation email';
export const SEND_ADMIN_COMMUNITY_CREATED_EMAIL = 'admin community created';
export const SEND_NEW_MENTION_THREAD_EMAIL = 'send thread mention email';
export const SEND_NEW_MENTION_MESSAGE_EMAIL = 'send message mention email';
export const SEND_ADMIN_TOXIC_MESSAGE_EMAIL = 'admin toxic content email';
export const SEND_ADMIN_SLACK_IMPORT_PROCESSED_EMAIL =
  'admin slack import processed email';
export const SEND_ACTIVE_COMMUNITY_ADMIN_REPORT_EMAIL =
  'send active community admin report email';
export const SEND_PRIVATE_CHANNEL_REQUEST_SENT_EMAIL =
  'send request join private channel email';
export const SEND_PRIVATE_CHANNEL_REQUEST_APPROVED_EMAIL =
  'send private channel request approved email';
export const SEND_PRIVATE_COMMUNITY_REQUEST_SENT_EMAIL =
  'send request join private community email';
export const SEND_PRIVATE_COMMUNITY_REQUEST_APPROVED_EMAIL =
  'send private community request approved email';
export const SEND_ADMIN_USER_SPAMMING_THREADS_NOTIFICATION_EMAIL =
  'send admin user spamming threads notification email';
export const SEND_ADMIN_USER_REPORTED_EMAIL = 'send admin user reported email';
export const SENDGRID_WEBHOOK_EVENT = 'process sendgrid webhook event';

export const NEW_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-136648ee3f444379af3e320a5beede7f'
  : 'd-7a4c14fd440146f1b1cfcafb633bb040';
export const NEW_MENTION_THREAD_TEMPLATE = IS_PROD
  ? 'd-a07e5f76446642dda475903737e72280'
  : 'd-b5558f7e9b1d430aa772c2c24ecb8107';
export const NEW_MENTION_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-077e3a46dfe7477187dddd06adb70e09'
  : 'd-637189bc871744e9846694bff9f572ae';
export const NEW_DIRECT_MESSAGE_TEMPLATE = IS_PROD
  ? 'd-a1fbb4abfcf143dcb229d45ee5d68c5a'
  : 'd-3e289af9efe748308be2dde1d3786c0d';
export const NEW_USER_WELCOME_TEMPLATE = IS_PROD
  ? 'd-57c4111b847d4554b5d71f9fcf9170f8'
  : 'd-2e46e5b65abc42b78941fbe027be4cd5';
export const COMMUNITY_INVITE_TEMPLATE = IS_PROD
  ? 'd-5e909370a0534371a1916489d7b963fb'
  : 'd-69b2e17b7a0f46048dcf4083ad4f9c48';
export const NEW_COMMUNITY_WELCOME_TEMPLATE = IS_PROD
  ? 'd-3a72aa9dec664ab4badd20e17586f477'
  : 'd-dc7b4f048f4c460f9dd368fd3796421b';

export const NEW_THREAD_CREATED_TEMPLATE = IS_PROD
  ? 'd-1e4ff6df58c244d8a1da610629bc63a1'
  : 'd-084c11332981443388ebdae05d0a2ff4';
export const DIGEST_TEMPLATE = IS_PROD
  ? 'd-54e8d4905da64158a98ddb92c9330583'
  : 'd-5e52250c25be4654af82172970551919';
export const EMAIL_VALIDATION_TEMPLATE = IS_PROD
  ? 'd-54707b1f7b4444f29d4f434c4f068b52'
  : 'd-9fbb3cc969364050aac891c255d31209';
export const ADMINISTRATOR_EMAIL_VALIDATION_TEMPLATE = IS_PROD
  ? 'd-c7ab6234c65b47d88413d9deaae0f7f1'
  : 'd-a60e1df2d5294c73818759be13f09df4';

export const ADMIN_COMMUNITY_CREATED_TEMPLATE =
  'd-8220ddfc3d3a436a9ea974348c9c2edd';
export const ADMIN_TOXIC_MESSAGE_TEMPLATE =
  'd-f6e52c81dd8d49e29f23c5c6112d676b';
export const ADMIN_SLACK_IMPORT_PROCESSED_TEMPLATE =
  'd-b3f8d36ef3354ce987a352ce39893432';
export const ADMIN_ACTIVE_COMMUNITY_REPORT_TEMPLATE =
  'd-82812e47e2ea458c8ded5be8d3de4f48';
export const ADMIN_USER_SPAMMING_THREADS_NOTIFICATION_TEMPLATE =
  'd-65de04a810d84af7b76a57f7b4b6ebbe';
export const ADMIN_USER_REPORTED_TEMPLATE =
  'd-7340d2f62edd4af6a4c95f87a8d4e1c6';

export const PRIVATE_CHANNEL_REQUEST_SENT_TEMPLATE = IS_PROD
  ? 'd-fe75baaf293541889bd3a573c2d9b1c5'
  : 'd-29f3f62815004e0bb3b9f884c9fb3901';
export const PRIVATE_CHANNEL_REQUEST_APPROVED_TEMPLATE = IS_PROD
  ? 'd-b419b76ca66046b3b24ead7b3a0cbb36'
  : 'd-6bc3fffa3fa64e369035bc906b3975dd';

export const PRIVATE_COMMUNITY_REQUEST_SENT_TEMPLATE = IS_PROD
  ? 'd-0e21a47bdce348a093c86b8779d84687'
  : 'd-743d07e016ee4798a87c06b5dd0a27a1';
export const PRIVATE_COMMUNITY_REQUEST_APPROVED_TEMPLATE = IS_PROD
  ? 'd-73135e016dbf47bbb37ed45eb7860b81'
  : 'd-d91de18c257344d2bf9ff0c628d1a92e';

// types used to generate unsubscribe tokens
export const TYPE_DAILY_DIGEST = 'dailyDigest';
export const TYPE_WEEKLY_DIGEST = 'weeklyDigest';
export const TYPE_NEW_THREAD_CREATED = 'newThreadCreated';
export const TYPE_NEW_MESSAGE_IN_THREAD = 'newMessageInThreads';
export const TYPE_NEW_DIRECT_MESSAGE = 'newDirectMessage';
export const TYPE_NEW_MENTION = 'newMention';
export const TYPE_MUTE_CHANNEL = 'muteChannel';
export const TYPE_MUTE_COMMUNITY = 'muteCommunity';
export const TYPE_MUTE_THREAD = 'muteThread';
export const TYPE_MUTE_DIRECT_MESSAGE_THREAD = 'muteDirectMessageThread';
