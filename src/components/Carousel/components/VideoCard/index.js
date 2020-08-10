import React from 'react';
import { VideoCardContainer, Span } from './styles';
import { Link } from 'react-router-dom';

// function getYouTubeId(youtubeURL) {
//   return youtubeURL
//     .replace(
//       /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//       '$7',
//     );
// }


function VideoCard({ videoTitle, videoURL, categoryColor, videoCape }) {
  const image = videoCape;
  return (
    <>
      <VideoCardContainer
        as={Link}
        url={image}
        to={videoURL}
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />
      <Span>{ videoTitle }</Span>
    < />
  );
}

export default VideoCard;
