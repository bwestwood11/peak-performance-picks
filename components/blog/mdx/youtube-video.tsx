import React from 'react'

const YouTubeVideo = ({videoId}: {videoId: string}) => {
  return (
    <iframe className='mx-auto py-3 aspect-video max-w-full' width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}

export default YouTubeVideo