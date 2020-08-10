import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';
import { Link } from 'react-router-dom';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
  trailerURL,
  Iframe
}) {
  let youTubeID = '';
  if (Iframe) {
    youTubeID = getYouTubeId(trailerURL);
  }
  const bgUrl = url;

  function VideoIframe({show}){
    if(show === true) {
      return (
        <VideoIframeResponsive
          youtubeID={youTubeID}
      />
      )
    } else {
      return (
        <>
        < />
      )
    }
  }


  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title as={Link} to={`/anime/${videoTitle}`}>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframe show={Iframe} />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
