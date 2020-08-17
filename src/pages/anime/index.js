import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import animes from '../../respositories/animes';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

function AnimePage() {
  const [anime, setAnime] = useState({ name: '', seasons: [], episodes: [] });
  const { name } = useParams();
  useEffect(() => {
    animes.select(name)
      .then((animeInfo) => {
        setAnime(animeInfo);
      });
  }, [name]);
  console.log(anime);
  return (
    <PageDefault paddingAll={0}>
      <BannerMain
        videoTitle={anime.name}
        url={anime.capeURL}
        videoDescription={anime.resume}
        Iframe={false}
      />
      <Carousel
        Season={anime.seasons[0]}
        Color="red"
        Episodes={anime.episodes}
        atual="anime"
        animeName={anime.name}
      />
    </PageDefault>
  );
}

export default AnimePage;
