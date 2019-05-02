// @flow
import type { GraphQLContext } from '../../';
import type { DBThread } from 'shared/types';
import generateImageFromText from '../../utils/generate-thread-meta-image-from-text';
import { signImageUrl } from 'shared/imgix';
import { PROD_DOMAIN } from 'shared/constants';

export default async (thread: DBThread, _: any, ctx: GraphQLContext) => {
  const { loaders } = ctx;
  const { watercooler, communityId, content } = thread;

  const community = await loaders.community.load(communityId);
  if (!community) return null;

  const imageUrl = generateImageFromText({
    title: watercooler
      ? `Chat with the ${community.name} community`
      : content.title,
    footer: `${PROD_DOMAIN}/${community.slug}`,
  });

  if (!imageUrl) return null;

  return signImageUrl(imageUrl);
};
