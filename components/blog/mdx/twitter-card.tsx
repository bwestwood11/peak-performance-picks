'use client';

import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterCard = ({tweetId}: {tweetId: string}) => {
  return (
    <TwitterTweetEmbed tweetId={tweetId} />
  )
}

export default TwitterCard