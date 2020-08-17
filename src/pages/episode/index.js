import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import animes from '../../respositories/animes';

function EpisodePage() {
  const [anime, setAnime] = useState();
  const { name, episode } = useParams();
  const [url, setURL] = useState('');

  useEffect(() => {
    animes.select(name)
      .then((animeInfo) => {
        setURL(animeInfo.episodes[episode].url);
        setAnime(animeInfo.name)
      });
  }, [name]);

  const Div = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  `;
  const VideoButton = styled.a`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 7px;
  text-decoration: none;
  // margin-left: 50px;
  // margin-right: 50px;
  width: 100px;
  height: 50px;
  color: white;
  background-color: black;
  border: none;
  font-size: 25px;
  cursor: pointer;
  border-radius: 10px;
  &:hover{
      background-color: rgb(36, 36, 36);
  }
  `;
  const firstPage = episode == 0;
  const nextVideo = parseInt(episode) + 1;
  const prevVideo = firstPage ? 0 : parseInt(episode) - 1;
  console.log(nextVideo);
  return (
    <PageDefault paddingAll={0}>
      <Div>
        <iframe
          title="video"
          width="640"
          height="360"
          frameBorder="0"
          src={url}
          allowFullScreen
        />
      </Div>
      <Div>
        <VideoButton as={Link} to={`/anime/${anime}/${prevVideo}`}>Anterior</VideoButton>
        <VideoButton as={Link} to={`/anime/${anime}/`}>Voltar</VideoButton>
        <VideoButton as={Link} to={`/anime/${anime}/${nextVideo}`}>Próximo</VideoButton>
      </Div>
    </PageDefault>
  );
}

export default EpisodePage;
