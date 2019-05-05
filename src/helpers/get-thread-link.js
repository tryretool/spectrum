// @flow
import slugg from 'slugg';
import { RELATIVE_ROOT } from 'shared/constants';
import type { ThreadInfoType } from 'shared/graphql/fragments/thread/threadInfo';

const getThreadLink = (thread: ThreadInfoType) => {
  if (!thread.community || !thread.channel)
    return `${RELATIVE_ROOT}/thread/${thread.id}`;
  return `${RELATIVE_ROOT}/${thread.community.slug}/${
    thread.channel.slug
  }/${slugg(thread.content.title)}~${thread.id}`;
};

export default getThreadLink;
