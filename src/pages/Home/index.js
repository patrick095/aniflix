/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categories from '../../respositories/categories';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    categories.getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => {
        setData(categoriesWithVideos);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {data.length === 0 && (<div>Loading...</div>)}

      {data.map((anime, index) => {
        if (index === 0) {
          return (
            <div key={anime.id}>
              <BannerMain
                videoTitle={data[0].animes[0].name}
                url={data[0].animes[0].capeURL}
                videoDescription={data[0].animes[0].resume}
                Iframe
                trailerURL={data[0].animes[0].trailerURL}
              />
              <Carousel
                category={data[0]}
                atual="home"
              />
            </div>
          );
        }

        return (
          <Carousel
            key={ data[index].id }
            category={data[index]}
            atual="home"
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
