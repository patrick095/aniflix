import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import animes from '../../respositories/animes';

function EpisodePage() {
  const { name, episode } = useParams();
  const [url, setURL] = useState('');

  useEffect(() => {
    animes.select(name)
      .then((animeInfo) => {
        setURL(animeInfo.episodes[episode].url);
      });
  }, [name]);

  const Div = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  `;
  const VideoButton = styled.button`
  margin-left: 50px;
  margin-right: 50px;
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
        <VideoButton>Anterior</VideoButton>
        <VideoButton>Próximo</VideoButton>
      </Div>
    </PageDefault>
  );
}

export default EpisodePage;
